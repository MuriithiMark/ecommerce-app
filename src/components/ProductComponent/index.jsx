import React from "react";
import "./Product.css";
import { useContext } from "react";
import CartContext from "../../services/Contexts/CartContext";

function ProductComponent({ product }) {
  const [state, dispatch] = useContext(CartContext);
  const handleAdd = () => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };
  return (
    <div className="product">
      <img src={product.thumbnail} alt="" />
      <h1>{product.title}</h1>
      <div className="view">
      <p>Price: ${product.price} </p>
      <p>Quantity: {product.stock}</p>
      </div>
      <button
        onClick={handleAdd}
        style={{
          // paddingRight: "40%",
          backgroundColor: "gray",
          borderRadius: "20px",
          border: "1px solid gray",
          width:'50%',
          height:'40px',
         margin:'auto'

        }}
      >
        Add to cart
      </button>
    </div>
  );
}

export default ProductComponent;
