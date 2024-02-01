import React, { useContext, useReducer } from "react";
import CartContext from "./CartContext";
import { CartReducer } from "../Contexts/../CartReducer";
import { children } from "react";

function CartContextProvider({children}) {
    const [state, dispatch] = useReducer(CartReducer, {isBarOpen: false, products: []});
  return (
    // value ={values to be used in the components}//
    <CartContext.Provider value={[state, dispatch]}>
        {children}
    </CartContext.Provider>

  )
}

export default CartContextProvider;



