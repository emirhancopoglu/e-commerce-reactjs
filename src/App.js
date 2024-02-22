import "./App.css";
import Home from "./Pages/Home/Home.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Pages/Contact/Contact.js";
import Login from "./Pages/Login/Login.js";
import Signup from "./Pages/Signup/Signup.js";
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
