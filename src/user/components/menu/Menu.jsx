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
      <main className={`${styles.main}`}>
      <div className={`${styles.coverContainer}`}>

      <ul className={`${styles.accordion}`}>
        {MenuItems(menuData, props.cart, props.handleCartChange)}
      </ul>

        <section className={`${styles.sectionContainer}`}>
          <div className={`${styles.sectionDetails} text-black`}>
            <div className={`${styles.animatedLine} animatedLine`}></div>
            <div className={`${styles.titleText}`}> Якість продуктів</div>
            <div className={`${styles.textContainer} ${styles.articleText}`}>
              На кожному етапі готування ми ретельно відбираємо найвищу якість продуктів, щоб створити для вас неповторні   смакові враження.
            </div>
          </div>

          <div className={`${styles.imageContainer}`}>
            <img className={`${styles.productImage}`} src="images/decorations/product-quality.png"/>

            <div className={`${styles.imageDetailsContainer} ${styles.iconFirst}`}>
              <img className={`${styles.imageDetails} ${styles.imageDetailsFirst}`} src="images/decorations/coffee-beans.jpg" />
            </div>
            
            <div className={`${styles.imageDetailsContainer} ${styles.iconSecond}`}>
              <img className={`${styles.imageDetails} ${styles.imageDetailsSecond}`} src="images/decorations/salad-leaves.jpg" />
            </div>
          </div>


        </section>
      </div>  
      </main>
      <Footer />
    </>
  );
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