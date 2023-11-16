import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/shared/footer.module.css";

import { BsTelegram } from "react-icons/bs";
import { SiInstagram } from "react-icons/si";


export default function CreateFooter() {
  const [Displayed, setDisplayed] = useState(true);

  console.log(window.innerWidth)

useEffect(() => {
  const handleResize = () => {
   console.log(window.innerWidth)
  };

  handleResize();
    
  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);


  return (
    <footer className={`${styles.footer}`}>

      <div className={`${styles.imageContainer}`}>
        <img className={`${styles.logoImg}`} src="images/icons/brand-logo.png" />
      </div>

      <section className={`${styles.detailsSection}`}>
      <div className={`${styles.coverSection}`}>
        <div className={`${styles.subdivision}`}>
          <div className={`${styles} mb-[10px] font-bold text-xl`}>Посилання</div>
          <Link className={`${styles.link}`} to="/">Головна</Link>
          <Link className={`${styles.link}`} to="/menu">Меню</Link>
          <Link className={`${styles.link}`} to="/login">Увійти</Link>
          <Link className={`${styles.link}`} to="/cart">Кошик</Link>
        </div>

        <div className={`${styles.subdivision}`}>
          <div className={`${styles} mb-[10px] font-bold text-xl`}>Посилання</div>
          <Link className={`${styles.link}`} to="/">Головна</Link>
          <Link className={`${styles.link}`} to="/menu">Меню</Link>
          <Link className={`${styles.link}`} to="/login">Увійти</Link>
          <Link className={`${styles.link}`} to="/cart">Кошик</Link>
        </div>

        <div className={`${styles.subdivision}`}>
          <div className={`${styles} mb-[10px] font-bold text-xl`}>Посилання</div>
          <Link className={`${styles.link}`} to="/">Головна</Link>
          <Link className={`${styles.link}`} to="/menu">Меню</Link>
          <Link className={`${styles.link}`} to="/login">Увійти</Link>
          <Link className={`${styles.link}`} to="/cart">Кошик</Link>
        </div>

      </div>
      </section>

    </footer>
  );
}