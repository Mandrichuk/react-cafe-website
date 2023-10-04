import React from "react";
import { Link } from "react-router-dom";

export default function CreateMenu(props) {
  const { id, name, category, linkName, imageSrc } = props;

  const noMargin = (category === "Без алкогольні") ? "no-margin-container" : "";

  const lowerStyle = (id % 2 === 0) ? "lower-menu-container" : "";
  const separatedName = name.split(" ");

  const menu = (
    <Link to={`/menu/${linkName}`} className="text-white">
      <div className={`menu-container ${lowerStyle} ${noMargin}`}>
        <img className="dish-image" src={`images/decorations/${imageSrc}`} />
        <div className="menu-name-container">
          <p className="menu-text-name">{separatedName[0]}</p>
          <p className="menu-text-name">{separatedName[1]}</p>
        </div>
      </div>
    </Link>
  );

  return menu;
}