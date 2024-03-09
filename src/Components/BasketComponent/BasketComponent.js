import React from "react";
import "./BasketComponent.css";
import sepetim from "../../Assets/sepetim.png";

const BasketComponen = () => {
  return (
    <div className="basketcompmaincontainer">
      <div className="basketcontainer">
        <div className="basketproductpcontainer">
          <p className="basketproductp">
            Sepetim <span> (1 </span>Ürün)
          </p>
        </div>
        <div className="basketcontainercard">
          <div className="basketcard">
            <div className="basketcardproduct">
              <div className="basketproduct-cargo">
                <div className="basketproductimgcontainer">
                  <img
                    src={sepetim}
                    alt="Fotograf"
                    className="basketproductimg"
                  ></img>
                </div>
                <div className="basketcargo">
                  <p className="basketbrandtitle">Cart Curt </p>
                  <p className="basketproduct-title">Tişört</p>
                  <p className="basketproductcargop">
                    Tahmini Kargoya Teslim : 2 gün içinde
                  </p>
                </div>
              </div>
            </div>
            <div className="basketcardpricestuff">
              <p className="productstockamount">Adet</p>
              <p>67.65</p>
              <button className="basketproductdelete">Sil</button>
            </div>
          </div>
          <div className="productsummary-button">
            <p className="productsummary-p"> Sipariş Özet</p>
            <div className="totalofproduct">
              <p>Ürünün Toplamı:</p>
              <p>67,65</p>
            </div>
            <div className="totalofcargo">
              <p>Kargo Toplamı:</p>
              <p>35.20</p>
            </div>
            <div className="totalofmainproduct">
              <p>Toplam</p>
              <p>102.654</p>
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

export default BasketComponen;
