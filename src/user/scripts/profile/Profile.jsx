import React from "react";
import styles from "../../styles/pages/profile.module.css";

import Header from "../shared/header/Header.jsx";
import Footer from "../shared/Footer.jsx";

import History from "./materials/History.jsx";

export default function CreateProfile(props) {
  return (
    <>
      <Header />

      <main className={`${styles.mainContainer} mt-[100px] text-black`}> 
        <div className={`${styles.allInfoContainer} max-w-[600px] w-[60%] flex flex-col items-center justify-center`}>
          <div className={`${styles.infoContainer} w-[80%] flex items-center justify-center p-[10px] border-[2px] text-[1.5rem] mb-[20px]`}>
            Имя 
          </div>
          <div className={`${styles.infoContainer} w-[80%] flex items-center justify-center p-[10px] border-[2px] text-[1.5rem] mb-[20px]`}>
            Номер телефону 
          </div>
          <div className={`${styles.infoContainer} w-[80%] flex items-center justify-center p-[10px] border-[2px] text-[1.5rem] mb-[80px]`}>
            Бонуси 
          </div>
        </div>

        {props.history.reverse().map(historyItem => <History history={historyItem} />)}
      </main>

      <Footer />
    </>
  );
}