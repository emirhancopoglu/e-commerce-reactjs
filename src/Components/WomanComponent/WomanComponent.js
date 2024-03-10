import React from "react";
import "./WomanComponent.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LoadingPage from "../LoadingPage/LoadingPage";
import star from "../../Assets/star.png";

const WomanComponent = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([
    "dresses",
    "shoes",
    "watches",
    "bags",
  ]);
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("highest");

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

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const sortProducts = (products, sortBy) => {
    if (sortBy === "lowest") {
      return [...products].sort((a, b) => a.price - b.price);
    } else {
      return [...products].sort((a, b) => b.price - a.price);
    }
  };

  return (
    <div className="mainwomancompcontainer">
      {loading ? (
        // Eğer loading durumu true ise LoadingPage bileşenini göster
        <LoadingPage />
      ) : (
        <div className="womanand-filtercontainer">
          <div className="womansearchbarinputandfilter">
            <div className="sortingmaincontainer">
              <div className="sortingcontainer">
                <form>
                  <select
                    name="sort"
                    onChange={handleSortChange}
                    value={sortBy}
                    className="selectioninput"
                  >
                    <option value="highest">En yüksek fiyat</option>
                    <option value="lowest">En düşük fiyat</option>
                  </select>
                </form>
              </div>
            </div>
            <div className="womansearchbarcontainer">
              <div className="womansearchbarandinput">
                <input
                  type="text"
                  placeholder="Ara"
                  className="womansearchinput"
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
            </div>
            <div className="womanfiltercardcontainer">
              <div className="womanfiltermaincontainer">
                <p className="womanfiltercategoryp">Kategori</p>
                <p className="womanfilterdressesp">
                  <input
                    type="checkbox"
                    value="dresses"
                    checked={selectedCategories.includes("dresses")}
                    onChange={() => handleCategoryChange("dresses")}
                  />
                  Elbise
                </p>
                <p className="womanfiltershoesp">
                  <input
                    type="checkbox"
                    value="shoes"
                    checked={selectedCategories.includes("shoes")}
                    onChange={() => handleCategoryChange("shoes")}
                  />
                  Ayakkabı
                </p>
                <p className="womanfilterwatchesp">
                  <input
                    type="checkbox"
                    value="watches"
                    checked={selectedCategories.includes("watches")}
                    onChange={() => handleCategoryChange("watches")}
                  />
                  Saat
                </p>
                <p className="womanfilterbagsp">
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

          <div className="womancompcontainer">
            <div className="womantshirtcontainer">
              {sortProducts(products, sortBy)
                .filter(
                  (product) =>
                    product.title.toLowerCase().includes(query.toLowerCase()) ||
                    product.brand.toLowerCase().includes(query.toLowerCase())
                )
                .map((product) => (
                  <div key={product.id} className="womantshirt1">
                    <Link to={`/products/${product.id}`}>
                      <img
                        src={product.thumbnail}
                        alt="Woman Tisort"
                        className="womanproducttumbnailimg"
                      ></img>
                    </Link>
                    <div className="womantshirt1title">
                      <p>
                        <span className="womanproductbrandclass">
                          {product.brand}{" "}
                        </span>
                        {product.title}
                      </p>
                    </div>
                    <p className="womanproductrating">
                      <img
                        src={star}
                        alt="Star"
                        className="womanproductrating-star"
                      ></img>
                      {product.rating}
                    </p>
                    <div className="womantshirt-pricediscount">
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
                        <span className="womanactualproductprice">
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
export default WomanComponent;
