import React from "react";
import styles from "../../../styles/pages/cart.module.css";

 
export default function CreateMeal() {
  return (
    <div className={`${styles.mainContainer} text-black flex flex-row items-center justify-center mb-[10px]`}>
      <div className={`${styles.mealNameContainer} text-[1.7rem] w-[200px] border border-gray-300 pl-[10px] pr-[10px] pt-[5px] pb-[5px] flex items-center justify-center mr-[10px]` }>
        Бургер
      </div>
      <div className={`${styles.amoutContainer} flex flex-row items-center mr-[10px]`}>
        <button className={`${styles.amountBtn} text-[1.7rem] border bg-gray-300 border-gray-300 h-[48px] w-[50px]`}>
          -
        </button>
        <div className={`${styles} flex items-center justify-center text-[1.7rem] border border-gray-300 h-[48px] w-[50px]`}>
          1
        </div>
        <button className={`${styles.amountBtn} text-[1.7rem] border bg-gray-300 border-gray-300 h-[48px] w-[50px]`}>
          +
        </button>
      </div>
      <div className={`${styles.priceContainer} w-[120px] flex flex-row justify-center items-center text-[1.7rem] border border-gray-300 h-[48px]`}>
        30грн
      </div>
    </div>
  );
} 