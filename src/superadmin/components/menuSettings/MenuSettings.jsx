import React from "react";
import { Link } from "react-router-dom";
import menuData from "../../../data/menuData";
import MenuItem from "./materials/MenuItem";
import styles from "../../styles/pages/menu.module.css";


export default function CreateMenu(props) {
  return (
    <main className={`w-full flex flex-col items-center justify-center`}>
      <div className="staffContent">
        <div className="text-black titleText font-bold mb-[30px]">
          Оберіть з меню страву для редагування або видалення
        </div>

        <Link
          to="/superadmin/menu/add/meal"
          className={`flex justify-center btn mb-2`}
        >
          Додати нову страву/напій
        </Link>
        <Link
          to="/superadmin/menu/add/category"
          className={`flex justify-center btn mb-5`}
        >
          Додати нову категорію
        </Link>

        <ul className={`${styles.accordion}`}>
          {MenuItems(menuData, props.cart, props.handleCartChange)}
        </ul>
      </div>
    </main>
  );
}

const MenuItems = (data, cart, handleCartChange) => {
  const menuItems = data.map((item) => {
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
};
