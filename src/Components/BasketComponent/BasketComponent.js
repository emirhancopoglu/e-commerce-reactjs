import React from "react";
import "./BasketComponent.css";
import basket from "../../Assets/basket.png";

const BasketComponent = ({ cart }) => {
  const handleDelete = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.location.reload();
  };

  if (cart.length === 0) {
    return (
      <div className="basketemptycompmaincontainer">
        <div className="empty-basket-main-container">
          <div className="empty-basket">
            <img className="basket-img" src={basket} alt="Sepet"></img>
            <p className="empty-basket-p">Sepetinde ürün bulunmamaktadır.</p>
            <div className="empty-basket-button">
              <button className="empty-basketbutton">
                {" "}
                <a href="/">Alışverişe Başla </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="basketcompmaincontainer">
      <div className="basketcontainer">
        <div className="basketproductpcontainer">
          <p className="basketproductp">
            Sepetim <span>({cart.length})</span> Ürün
          </p>
        </div>
        <div className="basketcontainerandtotal">
          <div className="basketcontainercard">
            {cart.map((item, index) => (
              <div key={index} className="basketcard">
                <div className="basketcardproduct">
                  <div className="basketproduct-cargo">
                    <div className="basketproductimgcontainer">
                      <img
                        src={item.thumbnail}
                        alt="Fotograf"
                        className="basketproductimg"
                      />
                    </div>
                    <div className="basketcargo">
                      <p className="basketbrandtitle">{item.brand}</p>
                      <p className="basketproduct-title">{item.title}</p>
                    </div>
                  </div>
                </div>
                <div className="basketcardpricestuff">
                  <p className="productstockamount">
                    {" "}
                    <span className="productamountspan">
                      Adet: {item.quantity}
                    </span>{" "}
                  </p>
                  <p>
                    {" "}
                    <span className="productpricespan">
                      {item.price * item.quantity} TL
                    </span>{" "}
                  </p>
                  <button
                    className="basketproductdelete"
                    onClick={() => handleDelete(index)}
                  >
                    Sil
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="productsummary-button">
            <p className="productsummary-p"> Sipariş Özet</p>
            <div className="totalofproduct">
              <p>Ürünün Toplamı:</p>
              <p>
                {cart.reduce(
                  (acc, item) => acc + item.price * item.quantity,
                  0
                )}{" "}
                TL
              </p>
            </div>
            <div className="totalofcargo">
              <p>Kargo Toplamı:</p>
              <p>35.20 TL</p>
            </div>
            <div className="totalofmainproduct">
              <p>Toplam:</p>
              <p>
                <span className="saleproducttotalspan">
                  {cart.reduce(
                    (acc, item) => acc + item.price * item.quantity,
                    0
                  ) + 35.2}{" "}
                  TL
                </span>
              </p>
            </div>
            <div className="productbuycontainer">
              <button className="productbuybutton">Satın Al</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketComponent;
