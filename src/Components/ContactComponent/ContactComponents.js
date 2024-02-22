import React from "react";
import "./ContactComponents.css";

const ContactComponents = () => {
  return (
    <div className="maincontactcompcontainer">
      <div className="contactcompcontainer">
        <div className="contactcard">
          <ul className="contactcardul">
            <li>
              <p className="contactcardp">Adres</p>
            </li>
            <li>
              <p>
                Sepetim Elektronik Alışveriş A.Ş Maslak Mahallesi Saat Sokak
                Spine Tower No:5 İç Kapı No:19 Sarıyer/İstanbul
              </p>
            </li>
            <li>
              <p>
                <span className="spanstyle">Tel:</span> 0 212 331 0 200
              </p>
            </li>
            <li>
              <p>
                <span className="spanstyle">Maslak V.D. :</span> 313 055 7669
              </p>
            </li>
            <li>
              <p>
                <span className="spanstyle">Ticaret Sicil No:</span> 711896
              </p>
            </li>
            <li>
              <p>
                <span className="spanstyle">Kep Adresi: </span> dsm@hs02.kep.tr
              </p>
            </li>
            <li>
              <p>
                <span className="spanstyle">Mersis Numarası: </span>
                0313055766900016
              </p>
            </li>
          </ul>
        </div>
        <div className="contactcard2and3">
          <div className="contactcard2">
            <ul className="contactcardul2">
              <li>
                <p className="contactcardp">Müşteri Hizmetleri</p>
              </li>
              <li>
                <p>
                  Çağrı Merkezimiz hafta içi ve hafta sonu
                  <span className="spanstyle"> 08.30 / 24.00 </span>
                  saatleri arasında hizmet vermektedir.
                </p>
              </li>
              <li>
                <p>Çağrı Merkezi: 0 212 331 0 200</p>
              </li>
              <li>
                <button className="sepetimlivehelp">
                  CANLI YARDIM DESTEĞİ
                </button>
              </li>
            </ul>
          </div>
          <div className="contactcard3">
            <ul className="contactcardul3">
              <li>
                <p>
                  Markanızı Sepetim.com’da görmek için{" "}
                  <span className="spanstyle">tıklayınız. </span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="contactcomp4and5">
        <div className="contactcard4">
          <ul className="contactcard4ul">
            <div className="allinputscontainer">
              <div className="inputforms">
                <input type="text" placeholder="Ad"></input>
                <input type="text" placeholder="Soyad"></input>
              </div>
              <div className="inputforms">
                <input type="email" placeholder="Email"></input>
                <input type="text" placeholder="Telefon Numarası"></input>
              </div>
              <div className="inputforms">
                <input type="text" placeholder="Adres"></input>
                <input type="text" placeholder="Mesajınız"></input>
              </div>
              <button className="inputsendhelp">GÖNDER</button>
            </div>
          </ul>
        </div>
        <div className="contactcard5">
          <ul className="contactcard5ul">
            <div className="map-responsive">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3006.650071362227!2d29.003897576453646!3d41.0984917138645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab5d6171181f9%3A0x8057373285ffa377!2zRFNNIEdydXAgRGFuxLHFn21hbmzEsWsgxLBsZXRpxZ9pbSB2ZSBTYXTEscWfIFRpY2FyZXQgQS7Fni4!5e0!3m2!1str!2str!4v1708538668764!5m2!1str!2str"
                width="590"
                height="450"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sepetim Maps"
              ></iframe>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactComponents;
