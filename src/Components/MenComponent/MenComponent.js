import React from "react";
import "./MenComponent.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LoadingPage from "../../Components/LoadingPage/LoadingPage.js";

const MenComponent = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([
    "shirts",
    "shoes",
    "watches",
  ]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await Promise.all(
          selectedCategories.map(async (category) => {
            const response = await axios.get(
              `https://dummyjson.com/products/category/mens-${category}`
            );
            return response.data.products.map((product) => ({
              ...product,
              category: category,
            }));
          })
        );

        const mergedProducts = fetchedProducts.flat();
        setProducts(mergedProducts);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching products: ", error);
      }
    };
    fetchProducts();
  }, [selectedCategories]);

  const calculateTotalPrice = (price, discountPercentage) => {
    const discountAmount = price * (discountPercentage / 100);
    const totalPrice = price + discountAmount;
    return totalPrice.toFixed(2);
  };

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((item) => item !== category)
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <div className="mainmencompcontainer">
      {loading ? (
        // Eğer loading durumu true ise LoadingPage bileşenini göster
        <LoadingPage />
      ) : (
        <div className="manand-filtercontainer">
          <div className="mansearchbarinputandfilter">
            <div className="mansearchbarcontainer">
              <div className="mansearchbarandinput">
                <input
                  type="text"
                  placeholder="Ara"
                  className="mansearchinput"
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
            </div>
            <div className="manfiltercardcontainer">
              <div className="manfiltermaincontainer">
                <p className="manfiltercategoryp">Kategori</p>
                <p className="manfiltershirtsp">
                  <input
                    type="checkbox"
                    value="shirts"
                    checked={selectedCategories.includes("shirts")}
                    onChange={() => handleCategoryChange("shirts")}
                  />
                  Tişört
                </p>
                <p className="manfiltershoesp">
                  <input
                    type="checkbox"
                    value="shoes"
                    checked={selectedCategories.includes("shoes")}
                    onChange={() => handleCategoryChange("shoes")}
                  />
                  Ayakkabı
                </p>
                <p className="manfilterwatchesp">
                  <input
                    type="checkbox"
                    value="watches"
                    checked={selectedCategories.includes("watches")}
                    onChange={() => handleCategoryChange("watches")}
                  />
                  Saat
                </p>
              </div>
            </div>
          </div>
          <div className="mencompcontainer">
            <div className="mentshirtcontainer">
              {products
                .filter(
                  (product) =>
                    (selectedCategories.includes(product.category) &&
                      product.title
                        .toLowerCase()
                        .includes(query.toLowerCase())) ||
                    product.brand.toLowerCase().includes(query.toLowerCase())
                )
                .map((product) => (
                  <div key={product.id} className="mentshirt1">
                    <Link to={`/products/${product.id}`}>
                      <img src={product.thumbnail} alt="Men Tisort"></img>
                    </Link>
                    <div className="mentshirt1title">
                      <p>
                        <span className="productbrandclass">
                          {product.brand}
                        </span>{" "}
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
      )}
    </div>
  );
};

export default MenComponent;
