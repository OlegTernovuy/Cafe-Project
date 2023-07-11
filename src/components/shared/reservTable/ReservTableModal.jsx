import React from "react";
import { useState } from "react";
import closeBtn from "../../../assets/images/closeBtn.svg";
import "./reservModal.css";

export const ReservTableModal = ({ handleHideReservTableModal }) => {
  const [data, setData] = useState({
    name: "",
    phone: "",
    guest: "",
    time: "",
  });

  const handleNameChange = (e) => {
    setData((prev) => ({
      ...prev,
      name: e.target.value,
    }));
  };
  const handlePhoneChange = (e) => {
    setData((prev) => ({
      ...prev,
      phone: e.target.value,
    }));
  };
  const handleGuestChange = (e) => {
    setData((prev) => ({
      ...prev,
      guest: e.target.value,
    }));
  };
  const handleTimeChange = (e) => {
    setData((prev) => ({
      ...prev,
      time: e.target.value,
    }));
  };

  const createReserv = (e) => {
    e.preventDefault();
    const reserv = {
      name: data.name,
      phone: data.phone,
      guest: data.guest,
      time: data.time,
    };
    console.log(reserv);
    handleHideReservTableModal();
    alert('Чекаємо на вас');
  };

  return (
    <>
      <form onSubmit={createReserv} className="reservTable">
        <h2>Забронювати столик</h2>
        <button
          onClick={handleHideReservTableModal}
          className="hideBtn"
          type="button"
        >
          <img src={closeBtn} alt="close" />
        </button>
        <div className="inputs">
          <input
            className="reservInput"
            type="text"
            placeholder="ім'я"
            value={data.name}
            onChange={handleNameChange}
            required
          />
          <input
            className="reservInput"
            type="text"
            placeholder="0981231234"
            value={data.phone}
            onChange={handlePhoneChange}
            required
            // type="tel"
            pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
          />
          <div className="someInputs">
            <input
              className="reservInputG"
              type="number"
              placeholder="Гостей"
              value={data.guest}
              onChange={handleGuestChange}
              required
            />
            <input
              className="reservInputG"
              type="time"
              placeholder="Час"
              value={data.time}
              onChange={handleTimeChange}
              required
              min="09:00"
              max="22:00"
              step="900"
            />
          </div>
        </div>
        <button className="reservBtn" type="submit">
          Забронювати
        </button>
      </form>
      <div onClick={handleHideReservTableModal} className="reservModal"></div>
    </>
  );
};
