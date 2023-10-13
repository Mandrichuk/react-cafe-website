import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Cafe from "../scripts/cafe/CreateCafe.jsx";
import Menu from "../scripts/menu/CreateMenu.jsx";
import Login from "../scripts/login/CreateLogin.jsx";
import Cart from "../scripts/cart/CreateCart.jsx";
import Profile from "../scripts/profile/CreateProfile.jsx";


export default function CreateApp() {
  const [cart, setCart] = useState({});
  const [isLoggined, setIsLoggined] = useState(false);

  function handleCartChange(mealID) {
      console.log(mealID);
  }


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Cafe />} />
        <Route path="/menu" element={<Menu cart={cart} handleCartChange={handleCartChange}/>} />
        {isLoggined ? 
          <Route path="/login" element={<Profile />} /> :
          <Route path="/login" element={<Login />} />
        }
        <Route path="/cart" element={<Cart />} /> 
      </Routes>
    </Router>
  );
}
