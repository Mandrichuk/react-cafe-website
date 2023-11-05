import React from "react";

import styles from "../../styles/pages/cafe.module.css";

import Header from "../shared/header/Header.jsx";
import Footer from "../shared/Footer.jsx";



export default function CreateCafe() {
  return (
    <>
      <Header />


      <main>

        <div className={`${styles.coverContainer}`}>
          <div className={`${styles.introductionContainer}`}>
            <div className={`${styles.welcomeContainer}`}>Ласкаво просимо</div>
            <div className={`${styles.nameContainer}`}>Drink&Food</div>
          </div>
        </div>


        <section className={`${styles.InfoSheet}`}>
          <div className={`${styles.animatedLine} animatedLine`}></div>
          <p className={`${styles.currentNewsText}`}>Актуальні новинки</p>
          <div className={`${styles.gridInfo}`}>

            <div className={`${styles.infoContainer}`}>
              <img src="images/background/hotdogs.jpg"/>
              <p>new</p>
            </div>
            <div className={`${styles.infoContainer}`}>
              <img src="images/background/hotdogs.jpg"/>
              <p>new</p>
            </div>
            <div className={`${styles.infoContainer}`}>
              <img src="images/background/hotdogs.jpg"/>
              <p>new</p>
            </div>

          </div>
        </section>

        <section className={`${styles.location}`}>

        </section>


      </main>


      <Footer />
    </>
  );
}
