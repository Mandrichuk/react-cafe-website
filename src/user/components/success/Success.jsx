import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/pages/success.module.css";
import { PiConfettiFill } from 'react-icons/pi';

import Header from "../shared/header/Header.jsx";


export default function CreateSuccess(props) {
  useEffect(() => {
    props.handleHistoryAdd("comment");
  }, []);

  return (
    <>
      <Header />
      <div className={`${styles.gradientBg} font-bold h-[50px] bg-red-300 w-full flex flex-row items-center justify-center text-[1.4rem]`}>
        Успіх!
      </div>
      <div className={`w-full flex flex-col items-center justify-center h-[60vh]`}>
        <div className={`${styles.mainContainer} flex-col items-center justify-center max-w-[500px]`}> 
          <div className={`${styles.successContainer} font-bold titleText w-full flex items-center justify-center`}>
            Замовлення прийнято!
          </div>
          <div className={`${styles.tagline} pretitleText w-full flex flex-col items-center justify-center`}>
            Ваше замовлення прийнято, час очікування та початок готування складе в межах 20 хвилин. Також ви можете переглянути ваше замовлення у вашому профілі.
          </div>
          <div className="flex w-full items-center justify-center mt-[20px]">
            <Link to="/" className={`btn flex-1 mr-2`}>До головної</Link>
            <Link to="/login" className={`btn flex-1 ml-2`}>До профілю</Link>
          </div>
        </div>
      </div>
    </>  
  );
}