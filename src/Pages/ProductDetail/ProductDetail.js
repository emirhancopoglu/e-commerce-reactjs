import React from "react";
import ProductDetailComp from "../../Components/ProductDetail/ProductDetailComp.js";
import Header from "../../Components/Header/Header.js";
import Footer from "../../Components/Footer/Footer.js";
import HamburgerHeaderComponent from "../../Components/HamburgerHeaderComponent/HamburgerHeaderComponent.js";
const ProductDetail = () => {
  return (
    <div className="productdetailactualcontainer">
      <HamburgerHeaderComponent />
      <Header />
      <ProductDetailComp />
      <Footer />
    </div>
  );
};

export default ProductDetail;
