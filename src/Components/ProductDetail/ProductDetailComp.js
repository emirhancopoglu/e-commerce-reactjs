import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ProductDetailComp.css";
import star from "../../Assets/star.png";
import LoadingPage from "../LoadingPage/LoadingPage";
import TrendingCarousel from "../TrendingCarousel/TrendingCarousel";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");

  const handleImageClick = (imageUrl) => {
    setMainImage(imageUrl);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/${id}`
        );
        setProduct(response.data);
        setMainImage(response.data.thumbnail);
      } catch (error) {
        console.log("Error fetching product: ", error);
      }
    };
    fetchProduct();
  }, [id]);

  const addToCart = (product) => {
    const existingItem = localStorage.getItem("cart");
    if (existingItem) {
      const cart = JSON.parse(existingItem);
      const existingProductIndex = cart.findIndex(
        (item) => item.id === product.id
      );
      if (existingProductIndex !== -1) {
        cart[existingProductIndex].quantity += 1;
      } else {
        cart.push({ ...product, quantity: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      localStorage.setItem(
        "cart",
        JSON.stringify([{ ...product, quantity: 1 }])
      );
    }
  };

  if (!product) {
    return (
      <div>
        <LoadingPage />
      </div>
    );
  }

  return (
    <div className="mainproductdetailcontainer">
      <div className="productdetailcontainer">
        <div className="productcard">
          <img
            className="productcardthumbnailimg"
            src={mainImage}
            alt="Product"
          ></img>
          <div className="small-images-container">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Small${index}`}
                onClick={() => handleImageClick(image)}
              />
            ))}
          </div>
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
            <button
              className="productsalebutton"
              onClick={() => addToCart(product)}
            >
              Sepete Ekle
            </button>
            <button className="productlikedbutton">♡</button>
          </div>
        </div>
      </div>
      <TrendingCarousel />
    </div>
  );
};

export default ProductDetail;
