import { Routes, Route } from "react-router-dom";
import { MainCafe } from "./components/pages/mainCafe/MainCafe";
import { FoodMenu } from "./components/pages/foodMenu/FoodMenu";
import { Delivery } from "./components/pages/delivery/Delivery";
import { Footer } from "./components/layout/footer/Footer";
import { LeftLogo } from "./components/shared/leftLogo/LeftLogo";
import './index.css'


function App() {
  return (
    <div className="App">
      <LeftLogo/>
      <Routes>
        <Route index element={<MainCafe />} />
        <Route path="/foodMenu" element={<FoodMenu />} />
        <Route path="/delivery" element={<Delivery />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
