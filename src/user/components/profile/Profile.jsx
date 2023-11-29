import React from "react";
import styles from "../../styles/pages/profile.module.css";

import Header from "../shared/header/Header.jsx";
import Footer from "../shared/Footer.jsx";

import History from "./materials/History.jsx"
import { MdEdit } from "react-icons/md";



export default function CreateProfile(props) {
  return (
    <>
      <Header />

      <main className={`${styles.mainContainer} text-black w-full`}> 
        <div className={`${styles.allInfoContainer} mt-[50px] max-w-[1100px] flex flex-col items-center  h-[1000px]`}>
          <div className={`${styles.infoContainer} flex flex-row items-center  w-full input mb-[10px] titleText`}>
             <div className=" flex-1 ml-[4%]">Имя</div>
             <MdEdit className="titleText mr-[4%]"  />
          </div>
          <div className={`${styles.infoContainer} flex flex-row items-center justify-between  w-full input mb-[10px] titleText`}>
            <div className="flex-1 ml-[4%]">Номер телефону</div>
          </div>
          <div className={`${styles.infoContainer} flex flex-row items-center justify-between  w-full input mb-[80px] titleText`}>
            <div className="flex-1 ml-[4%]">Бонуси</div>
          </div>

          {props.history.reverse().map(historyItem => <History history={historyItem} />)}
        </div>
      </main>

      <Footer />
    </>
  );
}