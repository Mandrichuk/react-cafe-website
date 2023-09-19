import React from "react";

import circlesData from "../../data/cafe/circlesData.js";
import Circle from "./materials/CreateCircles.js";

import menuData from "../../data/cafe/menuData.js";
import Menu from "./materials/CreateMenu.js";

import infoBar from "./materials/CreateInfoBar.js";

import storyData from "../../data/cafe/storyData.js";
import CreateStory from "./materials/CreateStory.js";

import locationData from "../../data/cafe/locationData.js";
import CreateLocation from "./materials/CreateLocation.js";



const locationHTML = (
  <CreateLocation
    key={locationData.id}
    {...locationData}
  />
);

const StoryHTML = (
  <CreateStory 
    key={storyData.id}
    {...storyData} 
  />
);

const infoBarHTML = (
  infoBar()
);

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
      <div className="main-first-section">
        {StoryHTML}

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

      <div className="main-second-section">

        <div className="info-separation-container">
        
        </div>

        <div className="menu-info-container">
          <div className="view-text-container">
            Перегляньте наше меню
          </div>

        <div className="all-menu-container">
          {menuHTML}
        </div>

        {locationHTML}
        
        <div className="third-section-container">
          {infoBarHTML} 
        </div>

      </div>
      </div>

    </main>
  );

  return main;
}