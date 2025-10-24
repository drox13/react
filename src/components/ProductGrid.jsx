import PropTypes from "prop-types";
import { ProductDetail } from "./ProductDetail";

export const ProductGrid = ({ products = [], handlerRemove }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>description</th>
          <th>price</th>
          <th>remove</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => {
          return (
            <ProductDetail
              handlerRemove={handlerRemove}
              product={product}
              key={product.name}
            />
          );
        })}
      </tbody>
    </table>
  );
};

ProductGrid.propTypes = {
  products: PropTypes.array.isRequired,
  handlerRemove: PropTypes.func.isRequired,
};
