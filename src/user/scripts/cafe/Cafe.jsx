import React from "react";

import "../../styles/pages/cafe.css";

import Header from "../shared/header/Header.jsx";
import Footer from "../shared/Footer.jsx";

import Story from "./materials/Story.jsx";


export default function CreateCafe() {
  return (
    <>
      <Header />


      <main>
        <div className="cover-container">

          <div className="introduction-container">
            <div className="welcome-container">Ласкаво просимо</div>
            <div className="name-container">Drink&Food</div>
            <div className="tagline-container">Смачні страви та напої</div>
          </div>
        </div>

      <div className="main-first-section flex flex-col justify-center items-center w-[100%] h-[750px]">
        {<Story />}

        <div className="meal-image-container">
          <img className="meal-image" src="images/background/hotdogs.jpg"/>
        </div>

        <div className="separation-container">
          <img className="separation-image" src="images/background/plates-on-table.jpg"/>
        </div>
      </div>

      </main>
      <Footer />
    </>
  );
}
