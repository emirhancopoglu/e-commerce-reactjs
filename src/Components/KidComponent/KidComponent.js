import React from "react";
import "./KidComponent.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LoadingPage from "../LoadingPage/LoadingPage";

const KidComponent = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([
    "shoes",
    "bags",
  ]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await Promise.all(
          selectedCategories.map(async (category) => {
            const response = await axios.get(
              `https://dummyjson.com/products/category/womens-${category}`
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
    <div className="mainkidcompcontainer">
      {loading ? (
        // Eğer loading durumu true ise LoadingPage bileşenini göster
        <LoadingPage />
      ) : (
        <div className="kid-and-filtercontainer">
          <div className="searchbarinputandfilter">
            <div className="searchbarcontainer">
              <div className="searchbarandinput">
                <input
                  type="text"
                  placeholder="Ara"
                  className="searchinput"
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
            </div>
            <div className="filtercardcontainer">
              <div className="filtermaincontainer">
                <p className="filtercategoryp">Kategori</p>
                <p className="filtershoesp">
                  <input
                    type="checkbox"
                    value="shoes"
                    checked={selectedCategories.includes("shoes")}
                    onChange={() => handleCategoryChange("shoes")}
                  />
                  Ayakkabı
                </p>
                <p className="filterbagsp">
                  <input
                    type="checkbox"
                    value="bags"
                    checked={selectedCategories.includes("bags")}
                    onChange={() => handleCategoryChange("bags")}
                  />
                  Çanta
                </p>
              </div>
            </div>
          </div>

          <div className="kidcompcontainer">
            <div className="kidtshirtcontainer">
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
                  <div key={product.id} className="kidtshirt1">
                    <Link to={`/products/${product.id}`}>
                      <img src={product.thumbnail} alt="Kid Tisort" />
                    </Link>
                    <div className="kidtshirt1title">
                      <p>
                        <span className="productbrandclass">
                          {product.brand}
                        </span>{" "}
                        {product.title}
                      </p>
                    </div>
                    <div className="kidtshirt-pricediscount">
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

export default KidComponent;
