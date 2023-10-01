import React from "react";
import Header from "../shared/CreateHeader.jsx";

import styles from "../../styles/pages/menu.module.css";
import menuData from "../../data/menu/menuData.js";

import { PiHamburgerFill } from 'react-icons/pi';


export default function CreateHeader() {

  return (
    <header className={`${styles.header}`}>
      {<Header />}

      <div className={`${styles.headerSection} mt-[140px] w-[100%] mb-[100px]`}>
        <div className={`${styles.headerTaglineContainer} w-[100%] h-[150px]`}>
          <div className="flex flex-row items-center">
          <div className={`${styles.menuText}`}>Меню</div>
          <PiHamburgerFill className="text-[2rem] mb-[14px] ml-[10px]" />
          </div>
          <div className={`${styles.menuTaglineText}`}>Обертайте сторінку та обирайте, що смачного пригостити разом із нами!</div>
        </div>
      </div>
    </header>
  );
}
