import React from "react";
import MenuItem from "./materials/CreateMenuItem.jsx";

import styles from "../../styles/pages/menu.module.css";
import menuData from "../../../data/menu/menuData.js";

export default function CreateMain(props) {

  return (
    <main className={`${styles.main}`}>
      <ul className={`${styles.accordion}`}>
        {MenuItems(menuData, props.cart, props.handleCartChange)}
      </ul>
    </main>
  );
}

const MenuItems = (data, cart, handleCartChange) =>  {
  const menuItems = data.map(item => {
    return <MenuItem 
      key={item.id}
      cart={cart}
      handleCartChange={handleCartChange}
      {...item}
    />
  });
  return menuItems;
}