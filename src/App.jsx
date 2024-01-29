import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import { getAllProducts } from "./services";
import ProductPageTransition from "./components/ProductPageTransition";
import HeaderComponent from "./components/HeaderComponent";
import SearchFilterComponent from "./components/SearchFilterComponent";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [products, setProducts] = useState([]);
  // If the products are empty array, this message should be displayed
  const [message, setMessage] = useState([]);
  const [pageData, setPageData] = useState({
    hasPrevPage: false,
    hasNextPage: false,
    page: 1,
  });

  const onDarkModeChange = () => {
    setDarkMode(!darkMode);
  };

  const onSearchAndFilter = ({ searchText, filterBy }) => {
    console.log("SearchText: ", searchText, " FilterBy: ", filterBy);
  };

  const onPageTransition = (newPage) => {
    setPageData((prevData) => {
      return {
        ...prevData,
        page: newPage
      }
    })
  }

  useEffect(() => {
    getAllProducts({ skip: pageData.page - 1, limit: 10 }).then((result) => {
      console.log(result)
      if (!result.success) {
        setMessage(() => result.message);
        setProducts([]);
        return;
      }
      const { products, total, skip, limit, message } = result;
      setMessage(()=> message);
      setProducts(() => products);
      setPageData(() => ({
        hasNextPage: (total - (skip + limit)) !== 0,
        hasPrevPage: skip !== 0,
        page: (skip % limit + 1),
      }));
    });
  }, [pageData.page]);

  return (
    <>
      {/* 
        <HeaderComponent darkMode={darkMode} onDarkModeChange={onDarkModeChange} />
        <SearchAndFilterComponent />
        <ProductListComponent products={products} /> 
    */}
    <HeaderComponent/>
    <SearchFilterComponent/>
      <ProductPageTransition pageData={pageData} onPageTransition={onPageTransition} />
    </>
  );
}

export default App;
