import React from "react";
import "./MenComponent.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MenComponent = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://dummyjson.com/products/category/mens-shirts"
        );
        const productArray = response.data.products;
        console.log(productArray);
        setProducts(productArray);
      } catch (error) {
        console.log("Error fetching products: ", error);
      }
    };
    fetchProducts();
  }, []);

  const calculateTotalPrice = (price, discountPercentage) => {
    const discountAmount = price * (discountPercentage / 100);
    const totalPrice = price + discountAmount;
    return totalPrice.toFixed(2);
  };

  const [query, setQuery] = useState("");
  return (
    <div className="mainmencompcontainer">
      <div className="searchbarmaincontainer">
        <div className="searchbarcontainer">
          <div className="searchbarandinput">
            <input
              type="text"
              placeholder="Ara"
              className="searchinput"
              onChange={(e) => setQuery(e.target.value)}
            ></input>
          </div>
        </div>
      </div>
      <div className="mencompcontainer">
        <div className="mentshirtcontainer">
          {products
            .filter(
              (product) =>
                product.title.toLowerCase().includes(query.toLowerCase()) ||
                product.brand.toLowerCase().includes(query.toLowerCase())
            )
            .map((product) => (
              <div key={product.id} className="mentshirt1">
                <Link to={`/products/${product.id}`}>
                  <img src={product.thumbnail} alt="Men Tisort"></img>
                </Link>
                <div className="mentshirt1title">
                  <p>
                    <span className="productbrandclass"> {product.brand}</span>
                    {product.title}
                  </p>
                </div>
                <div className="mentshirt-pricediscount">
                  <p>
                    <span className="discountpriceline-through">
                      {calculateTotalPrice(
                        product.price,
                        product.discountPercentage
                      )}
                      ₺
                    </span>
                  </p>
                  <p>
                    <span className="actualproductprice">
                      {product.price}TL
                    </span>
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MenComponent;
