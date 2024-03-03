import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ProductDetailComp.css";
import star from "../../Assets/star.png";
const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        console.log("Error fetching product: ", error);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mainproductdetailcontainer">
      <div className="productdetailcontainer">
        <div className="productcard">
          <img src={product.thumbnail} alt="Product"></img>
        </div>
        <div className="productfeature">
          <div className="productbrand-title">
            <p className="productbrand">{product.brand}</p>
            <p>{product.title}</p>
          </div>
          <div className="rate-stock-price">
            <div className="productrate-stock">
              <p className="productstarp">
                <img src={star} alt="Star"></img> {product.rating}
              </p>
              <p className="productstockp">Stok Adet : {product.stock}</p>
            </div>
            <div className="productprice">
              <p>{product.price}TL</p>
            </div>
          </div>
          <div className="productdesc">
            <p className="productdesctitlep">Öne Çıkan Özellikler:</p>
            <p className="productdescp">{product.description}</p>
          </div>
          <div className="productsalebutton-liked">
            <button className="productsalebutton">Sepete Ekle</button>
            <button className="productlikedbutton">♡</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
