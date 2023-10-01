import React from "react";
import MenuItem from "./materials/CreateMenuItem.jsx";

import styles from "../../styles/pages/menu.module.css";
import menuData from "../../data/menu/menuData.js";

export default function CreateHeader() {
  return (
    <header className={`${styles.main}`}>
      <div className={`${styles.menuGrid} w-[500px]`}>
        {MenuItems(menuData)}
      </div>
    </header>
  );
}

const MenuItems = (data) =>  {
  const menuItems = data.map(item => {
    return <MenuItem 
      key={item.id}
      name={item.name}
      image={item.image}
    />
  });
  return menuItems;
}