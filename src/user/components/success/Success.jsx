import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./success.module.css";
import Header from "../header/Header";


export default function CreateSuccess(props) {

  return (
    <>
      <Header />
      <div
        className={`${styles.gradientBg} font-bold h-[50px] w-full flex flex-row items-center justify-center text-[1.4rem]`}
      >
        Успіх!
      </div>
      <div
        className={`w-full flex flex-col items-center justify-center h-[60vh]`}
      >
        <div
          className={`${styles.mainContainer} flex-col items-center justify-center max-w-[500px]`}
        >
          <div
            className={`${styles.successContainer} font-bold titleText w-full flex items-center justify-center`}
          >
            Замовлення прийнято
          </div>

          <img src={`/images/background/fries.svg`} />

          <div
            className={`${styles.tagline} pretitleText w-full flex flex-col items-center justify-center text-gray-600`}
          >
            Ваше замовлення доставлено успішно, буде приготовлено якнайшвидше.
            Ви можете переглянути ваше замовлення у вашому профілі.
          </div>
          <div className="flex w-full items-center justify-center mt-[40px]">
            <Link to="/" className={`font-bold btn flex-1 mr-2`}>
              До головної
            </Link>
            <Link to="/login" className={`font-bold btn flex-1 ml-2`}>
              До профілю
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
