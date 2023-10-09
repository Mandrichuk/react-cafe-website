import React from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/shared/footer.module.css";

import { BsTelegram } from "react-icons/bs";
import { SiInstagram } from "react-icons/si";


export default function CreateFooter() {
  return (
    <footer className={`${styles.footer} mt-[100px] relative w-[100%] h-[240px] flex flex-col items-center justify-center`}>

    <div className={`${styles.contentContainer} w-[90%] flex flex-row items-center justify-between`}>
     <div className={`${styles.logoContainer} w-[45%]`}>
      <img className={`${styles.logoImg} w-[150px] object-cover`} src="images/icons/brand-logo.png"/>
     </div>

    <div className={`${styles.textSosialContainer} flex flex-row justify-between flex-1`}>
    <div className={`${styles.textContainer} flex flex-row items-center justify-between text-[1.3rem]`}>
      <div className={`${styles.text} mr-[25px] cursor-pointer`}>Адреса</div>
      <div className={`${styles.text} mr-[25px] cursor-pointer`}>Номер</div>
      <div className={`${styles.text} mr-[25px] cursor-pointer`}>Геолокацiя</div>
    </div>

    <div className={`${styles.socialContainer} flex flex-row text-[2.5rem]`}>
      <BsTelegram className={`mr-[15px] cursor-pointer`}/>
      <SiInstagram className={`cursor-pointer`}/>
    </div>

    </div>

    </div>

    </footer>
  );
}