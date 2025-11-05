import { useEffect, useState } from "react";
import { findAll, listProduct } from "../services/ProductService";
import { ProductGrid } from "./ProductGrid";
import PropTypes from "prop-types";
import { ProductForm } from "./ProductForm";

export const ProductApp = ({ title }) => {
  const [products, setProducts] = useState([]);

  const [productSelected, setProductSelected] = useState({
    id: 0,
    name: "",
    description: "",
    price: "",
  });

  const getProducts = async () => {
    const result = await findAll();
    console.log(result);
    setProducts(result.data._embedded.products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handlerAddProduct = (product) => {
    console.log(product);

    if (product.id > 0) {
      setProducts(
        products.map((prod) => {
          if (prod.id == product.id) {
            return { ...product };
          }
          return prod;
        })
      );
    } else {
      setProducts([...products, { ...product, id: new Date().getTime() }]);
    }
  };

  const handlerRemoveProduct = (id) => {
    setProducts(products.filter((product) => product.id != id));
  };

  const handlerProductSelected = (product) => {
    setProductSelected({ ...product });
  };

  return (
    <div className="container my-4">
      <h2> {title} </h2>
      <div className="row">
        <div className="col">
          <ProductForm
            handlerAdd={handlerAddProduct}
            productSelected={productSelected}
          />
        </div>
        <div className="col">
          {products.length > 0 ? (
            <ProductGrid
              products={products}
              handlerRemove={handlerRemoveProduct}
              handlerProductSelected={handlerProductSelected}
            />
          ) : (
            <div className="alert alert-warning">
              NO HAY PRODUCTOS EN EL SISTEMA!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

ProductApp.propTypes = {
  title: PropTypes.string.isRequired,
};
