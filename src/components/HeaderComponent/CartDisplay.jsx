import React from "react";
import { useContext } from "react";
import CartContext from "../../services/Contexts/CartContext";
import CartIcon from "../icons/CartIcon";
import './cart.css'


function CartDisplay() {
    const [state,dispatch] = useContext(CartContext)
    const MyAction = {
      type:'OPEN_CART'
    }
    const handleCart = () => {
      dispatch(MyAction)
    }
  return (
    <button  onClick={handleCart} className="icon">
      <CartIcon width={30} height={30} />
      <p>{state.products.length}</p>
    </button>
  );
}

export default CartDisplay;
