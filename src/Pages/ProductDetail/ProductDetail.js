import React from "react";
import ProductDetailComp from "../../Components/ProductDetail/ProductDetailComp.js";
import Header from "../../Components/Header/Header.js";
import Footer from "../../Components/Footer/Footer.js";
const ProductDetail = () => {
  return (
    <div className="productdetailactualcontainer">
      <Header />
      <ProductDetailComp />
      <Footer />
    </div>
  );
};

export default ProductDetail;
