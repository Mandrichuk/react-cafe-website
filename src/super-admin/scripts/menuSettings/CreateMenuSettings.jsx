import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/pages/menu.module.css";

import menuData from "../../../data/menu/menuData";
import MenuItem from "./materials/CreateMenuItem";


export default function CreateMenu(props) {


  
  return (
    <main className={`${styles.main} flex flex-col items-center justify-center`}>
      <div className="text-black text-[1.8rem] font-bold mb-[30px]">Оберіть з меню страву для редагування або видалення</div>

      <Link to="/superadmin/menu/add/meal" className={`${styles.add} flex justify-center text-white border bg-custom-green p-[10px] text-[1.3rem] font-bold w-[86%] mr-[15px]`}> 
        Додати нову страву/напій
      </Link>

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