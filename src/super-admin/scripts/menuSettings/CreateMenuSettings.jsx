import React from "react";
import styles from "../../styles/pages/menu.module.css";

import menuData from "../../../data/menu/menuData";
import MenuItem from "./materials/CreateMenuItem";


export default function CreateMenu(props) {

  return (
    <main className={`${styles.main} flex flex-col items-center justify-center `}>
      <div className="text-black text-[1.8rem] font-bold mb-[30px]">Оберіть з меню страву для редагування або видалення</div>

      <ul className={`${styles.accordion}`}>
        {MenuItems(menuData, props.cart, props.handleCartChange)}
      </ul>
    </main>
  );
}

const MenuItems = (data, cart, handleCartChange) =>  {
  const menuItems = data.map(item => {
    return (
    <MenuItem 
      key={item.id}
      cart={cart}
      handleCartChange={handleCartChange}
      {...item}
    />
    );
  });
  return menuItems;
}