import React, { useState } from "react";
import ProductContext from "./ProductContext";
import { useEffect } from "react";

function ProductContextProvider({children}) {
    const productList =useState([]);
    useEffect(() => {})
  return (
  <ProductContext.Provider value={productList}>
    {children}
  </ProductContext.Provider>
  )
}

export default ProductContextProvider;



