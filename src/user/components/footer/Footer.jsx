import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./footer.module.css";



export default function CreateFooter() {
  const [displayed, setDisplayed] = useState("medium");

  useEffect(() => {
    const handleResize = () => {
      let newDisplayed;
      switch (true) {
        case window.innerWidth > 1050:
          newDisplayed = 'large';
          break;
        case window.innerWidth < 700:
          newDisplayed = 'small';
          break;
        default:
          newDisplayed = 'medium';
      }
      setDisplayed(newDisplayed);
    };

    handleResize();
      
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <footer className={`${styles.footer} mt-[100px]`}>

      {displayed !== "large" && 
      <div className={`${styles.imageContainer}`}>
        <img className={`${styles.logoImg}`} src="images/icons/brand-logo.png" />
      </div>
      }

      <section className={`${styles.detailsSection}`}>
  
      <div className={`${styles.coverSection}`}>
        {displayed === "large" &&
        <div className={`${styles.imageCoverContainer}`}>
          <img className={`${styles.logoCoverImg}`} src="images/icons/brand-logo.png" />
        </div>
        }

        <div className={`${styles.subdivision}`}>
          <div className={`${styles} mb-[10px] font-bold text-xl`}>Посилання</div>
          <Link className={`${styles.link}`} to="/">Головна</Link>
          <Link className={`${styles.link}`} to="/menu">Меню</Link>
          <Link className={`${styles.link}`} to="/login">Увійти</Link>
          <Link className={`${styles.link}`} to="/cart">Кошик</Link>
        </div>

        <div className={`${styles.subdivision}`}>
          <div className={`${styles} mb-[10px] font-bold text-xl`}>Соцмережі</div>
          <a target="_blank" href="https://www.instagram.com/drink.food.zp/?igshid=MzRlODBiNWFlZA%3D%3D" className={`${styles.link}`} to="/">Інстаграм</a>
          <a target="_blank" href="https://t.me/Drink_Food_zp" className={`${styles.link}`} to="/menu">Телеграм</a>
        </div>

        {displayed !== "small" && 
        <div className={`${styles.subdivision}`}>
          <div className={`${styles} mb-[10px] font-bold text-xl`}>Більше інформації</div>
          <Link className={`${styles.link}`} to="/about">Про нас</Link>
        </div>
        }

      </div>

        {displayed === "small" && 
        <div className={`${styles.subdivision}`}>
          <div className={`${styles} mb-[10px] font-bold text-xl`}>Більше інформації</div>
          <Link className={`${styles.link}`} to="/about">Про нас</Link>
        </div>
        }

      </section>
    </footer>
  );
}