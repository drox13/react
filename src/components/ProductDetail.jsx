import PropTypes from "prop-types";

export const ProductDetail = ({
  product = {},
  handlerRemove,
  handlerProductSelected,
}) => {
  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.description}</td>
      <td>{product.price}</td>
      <td>
        <button onClick={() => handlerProductSelected(product)}>Editar</button>
      </td>
      <td>
        <button onClick={() => handlerRemove(product.id)}>remove</button>
      </td>
    </tr>
  );
};

ProductDetail.propTypes = {
  products: PropTypes.object.isRequired,
  handlerRemove: PropTypes.func.isRequired,
  handlerProductSelected: PropTypes.func.isRequired,
};
