import { Routes, Route } from "react-router-dom";
import { MainCafe } from "./components/pages/mainCafe/MainCafe";
import { FoodMenu } from "./components/pages/foodMenu/FoodMenu";
import { Delivery } from "./components/pages/delivery/Delivery";
import { Footer } from "./components/layout/footer/Footer";
import { LeftLogo } from "./components/shared/leftLogo/LeftLogo";
import "./index.css";

import { useContext } from "react";
import { ModalContext } from "./components/providers/ModalProvider";
import { ReservTableModal } from "./components/shared/reservTable/ReservTableModal";
import ScrollToTop from "./features/ScrollToTop";

function App() {
  const { showReservTableModal, handleHideReservTableModal } =
    useContext(ModalContext);
  return (
    <div className="App">
      {showReservTableModal && (
        <ReservTableModal
          handleHideReservTableModal={handleHideReservTableModal}
        />
      )}
      <LeftLogo />
      <Routes>
        <Route index element={<MainCafe />} />
        <Route path="/foodMenu/*" element={<FoodMenu />} />
        <Route path="/delivery" element={<Delivery />} />
      </Routes>
      <Footer />
      <ScrollToTop/>
    </div>
  );
}

export default App;
