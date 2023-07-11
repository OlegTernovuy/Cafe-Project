import React from "react";
import "./map.css";
import { footerMap } from "../../../data/footerMap.js";
// import { GoogleMap } from "../../layout/GoogleMap/GoogleMap";
import maps from "../../../assets/images/map.svg";
import locations from "../../../assets/images/location.svg";
import phone from "../../../assets/images/phone.svg";
import { useContext } from "react";
import { ModalContext } from "../../providers/ModalProvider";

export const FooterMap = () => {
  const {handleShowReservTableModal} = useContext(ModalContext)

  const timeDelivery = footerMap.map((item) => {
    return (
      <div key={item.id}>
        <h3 className="timeDel">{item.time} хв</h3>
        <aside className="placeDel">{item.desc}</aside>
      </div>
    );
  });

  // const location = {
  //   address: "Ternopil",
  //   lat: 37.42216,
  //   lng: -122.08427,
  // };

  return (
    <div className="cafeInfo">
      <h2 className="cafe-info-title">Карта</h2>
      <div className="wrapperMap">
        <div className="deliveryTime">{timeDelivery}</div>
        {/* <div className="map"><GoogleMap location={location} zoomLevel={17}/></div> */}
        <div className="map"><img className="maps" src={maps} alt="map" /></div>
        <div className="workSchedule">
          <div className="location">
            <img src={locations} alt="location" height={20} width={20} />
            <h3>Тернопіль, бульвар Лесі Українки, 16</h3>
          </div>
          <div className="location">
            <img src={phone} alt="phone" height={20} width={20} />
            <a href="tel:098-118-3456">098-118-3456</a>
          </div>
          <p className="schdule">Графік роботи</p>
          <p className="schdule">Пн-Чт з 09:00 до 22:00</p>
          <p className="schdule">Пт-Нд з 10:00 до 23:00</p>
          <button onClick={handleShowReservTableModal} className="reservBtn">Забронювати столик</button>
        </div>
      </div>
    </div>
  );
};
