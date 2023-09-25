import React from "react";

export default function CreateMenu(props) {
  const { id, name, category, imageSrc } = props;

  const lowerStyle = (id % 2 === 0) ? "lower-menu-container" : "";
  const separatedName = name.split(" ");

  const menu = (
    <div className={`menu-container ${lowerStyle}`}>
      <img className="dish-image" src={`images/decorations/${imageSrc}`} />
      <div className="menu-name-container">
        <p className="menu-text-name">{separatedName[0]}</p>
        <p className="menu-text-name">{separatedName[1]}</p>
      </div>
    </div>
  );

  return menu;
}