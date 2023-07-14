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
import { CategoryProducts } from "./components/shared/CategoryProducts/CategoryProducts";
import { Bag } from "./components/shared/Bag/Bag";

export const url = 'https://fakestoreapi.com/products';

//Local Server
// export const url = 'http://localhost:3001/menu'

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
        {/* <Route path="/bag" element={<Bag/>}/> */}
        <Route path="/delivery" element={<Delivery />} />
        {/* <Route path="/categories/:name" element={<CategoryProducts />}/> */}
      </Routes>
      <Footer />
      <ScrollToTop/>
    </div>
  );
}

export default App;
