import React from "react";
import MenuItem from "./materials/CreateMenuItem.jsx";

import styles from "../../styles/pages/menu.module.css";
import menuData from "../../data/menu/menuData.js";

export default function CreateMain() {
  return (
    <main className={`${styles.main}`}>
      <ul className={`${styles.accordion}`}>
        {MenuItems(menuData)}
      </ul>
    </main>
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