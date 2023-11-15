import React from "react";
import "../../styles/pages/menu.module.css";
import styles from "../../styles/pages/menu.module.css";

import MenuItem from "./materials/MenuItem.jsx";
import menuData from "../../../data/menu/menuData.js";
import { ImSpoonKnife } from 'react-icons/im';

import Header from "../shared/header/Header.jsx";
import Footer from "../shared/Footer.jsx";


export default function CreateMenu(props) {
  return (
    <>
      <Header />
      <main className={`${styles.main}`}>
      <header className={`${styles.header} w-full`}>
    
        <div className={`${styles.headerSection} w-full`}>
          <div className={`${styles.headerTaglineContainer} w-[100%] h-[150px]`}>
            <div className="flex flex-row items-center">
            <div className={`${styles.menuText}`}>Меню</div>
            <ImSpoonKnife className="text-[2rem] mb-[14px] ml-[10px]" />
            </div>
            <div className={`${styles.menuTaglineText}`}>Обертайте сторінку та обирайте, що смачного пригостити разом із  нами!</div>
          </div>
        </div>
      </header>

      <ul className={`${styles.accordion}`}>
        {MenuItems(menuData, props.cart, props.handleCartChange)}
      </ul>
      </main>
      <Footer />
    </>
  )
}

const MenuItems = (data, cart, handleCartChange) =>  {
  const menuItems = data.map(item => {
    return (<MenuItem 
      key={item.id}
      cart={cart}
      handleCartChange={handleCartChange}
      {...item}
    />)
  });
  return menuItems;
}