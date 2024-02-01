import React, { useContext } from "react";
import CartContext from "../../services/Contexts/CartContext";
import './cart.css'


function CartComponent() {
  const [state, dispatch] = useContext(CartContext);

  const closebar = () => {
    dispatch({
      type: "CLOSE_CART",
    });
  };

  return state.isBarOpen ? (
    <div className="major">
      <div className="title">
        <span>Cart List</span>
        <button onClick={closebar}>Bar</button>
      </div>
      {state.products.map((product) => {
        return (
          <div key={product.id} className="cart-item">
            <span>{product.title}</span>
          </div>
        );
      })}
    </div>
  ) : (
    <></>
  );
}

export default CartComponent;
