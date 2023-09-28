import React from "react";
import { FaBars } from 'react-icons/fa';
import Header from "../shared/CreateHeader.jsx";


export default function CreateHeader() {
  const header = (
    <header>
      {<Header />}


      <div className="introduction-container">
        <div className="welcome-container">Ласкаво просимо</div>
        <div className="name-container">Drink&Food</div>
        <div className="tagline-container">Смачні страви та напої</div>
      </div>

    </header>
  );

  return header;
}