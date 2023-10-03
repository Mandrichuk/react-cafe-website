import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Cafe from "../scripts/cafe/CreateCafe.jsx";
import Menu from "../scripts/menu/CreateMenu.jsx";

export default function CreateApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Cafe />} />
      </Routes>
      <Routes> 
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </Router>
  );
}
