import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Cafe from "../scripts/cafe/CreateCafe.jsx";
import Menu from "../scripts/menu/CreateMenu.jsx";

export default function CreateApp() {
  const [cart, setCart] = useState();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Cafe />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </Router>
  );
}
