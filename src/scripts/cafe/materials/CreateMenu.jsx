import React from "react";
import { Link } from "react-router-dom";

export default function CreateMenu(props) {
  const { id, name, category, linkName, imageSrc } = props;

  const noMargin = (category === "Без алкогольні") ? "no-margin-container" : "";

  const lowerStyle = (id % 2 === 0) ? "lower-menu-container" : "";
  const separatedName = name.split(" ");

  const menu = (
    <div className={`menu-container ${lowerStyle} ${noMargin}`}>
        <Link to={`/menu/${linkName}`} className="text-white w-[100%] h-[100%]">
        <img className="dish-image" src={`images/decorations/${imageSrc}`} />
        <div className="menu-name-container">
          <p className="menu-text-name">{separatedName[0]}</p>
          <p className="menu-text-name">{separatedName[1]}</p>
        </div>
        </Link>
      </div>
  );

  return menu;
}