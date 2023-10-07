import React from "react";

import circlesData from "../../data/cafe/circlesData.js";
import Circle from "./materials/CreateCircles.jsx";
import menuData from "../../data/cafe/menuData.js";
import Menu from "./materials/CreateMenu.jsx";
import Story from "./materials/CreateStory.jsx";
import Location from "./materials/CreateLocation.jsx";



const circlesHTML = (
  circlesData.map(circleData => {
    return <Circle
      key={circleData.id} 
      {...circleData}
    />
  })
);

const menuHTML = (
  menuData.map(positionData => {
    return <Menu 
      key={positionData.id}
      {...positionData}
    />
  })
);



export default function CreateMain() {
  const main = (
    <main>

      <div className="main-first-section flex flex-col justify-center items-center w-[100%] h-[750px]">
        {<Story />}

        <div className="meal-image-container">
          <img className="meal-image" src="images/background/hotdogs.jpg"/>
        </div>

        <div className="separation-container">
          <img className="separation-image" src="images/background/plates-on-table.jpg"/>
        </div>

        <div className="circules-container">
          {circlesHTML}
        </div>
      </div>

      <div className="main-second-section mt-[40px] flex flex-col items-center w-[100%] h-[1000px]">

        <div className="info-separation-container">
        
        </div>

        <div className="menu-info-container">
          <div className="view-text-container">
            Перегляньте наше меню
          </div>

        <div className="all-menu-container">
          {menuHTML}
        </div>
        {<Location />}
      </div>
      </div>

    </main>
  );

  return main;
}