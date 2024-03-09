import "./App.css";
import Home from "./Pages/Home/Home.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Pages/Contact/Contact.js";
import Login from "./Pages/Login/Login.js";
import Signup from "./Pages/Signup/Signup.js";
import Men from "./Pages/Men/Men.js";
import Woman from "./Pages/Woman/Woman.js";
import Kid from "./Pages/Kid/Kid.js";
import ProductDetail from "./Pages/ProductDetail/ProductDetail.js";
import Basket from "./Pages/Basket/Basket.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/men" element={<Men />}></Route>
          <Route path="/woman" element={<Woman />}></Route>
          <Route path="/kid" element={<Kid />}></Route>
          <Route path="/products/:id" element={<ProductDetail />}></Route>
          <Route path="/basket" element={<Basket />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
