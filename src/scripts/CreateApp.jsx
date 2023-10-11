import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Cafe from "../scripts/cafe/CreateCafe.jsx";
import Menu from "../scripts/menu/CreateMenu.jsx";
import Login from "../scripts/login/CreateLogin.jsx";
import Cart from "../scripts/cart/CreateCart.jsx";

export default function CreateApp() {
  const [cart, setCart] = useState();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Cafe />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}
