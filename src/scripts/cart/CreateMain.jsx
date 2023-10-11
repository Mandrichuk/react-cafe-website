import React from "react";
import styles from "../../styles/pages/cart.module.css";

import Meal from "./materials/CreateMeal.jsx";

export default function CreateMain() {
  return (
    <main className={`${styles.mainContainer} mt-[80px] text-black mb-[50px]`}>
      <div className={` w-[100%] flex flex-col items-center justify-center mt-[50px] p-[15px] pb-[5px]`}>
        <Meal/>
        <Meal/>
        <Meal/>
      </div>

      <div className={`${styles.orderContainer} flex flex-col text-[1.4rem] mt-[100px]`}>
        <label htmlFor="orderComment" className={`${styles} text-[1.2rem]`}>Коментар до замовлення</label>
        <input name="orderComment" className={`${styles.orderCommentInput} border border-gray-400 p-[8px] mb-[20px]`} placeholder="Подвійна порція м'яса.."/>

        <div className={`${styles.totalCost} border-b-[1px] border-black black p-[10px] mb-[80px]`}>
          Загальна сума замовлення: 0грн
        </div>

        <button className={`${styles.totalCost} bg-custom-green text-white p-[10px] mb-[40px]`}>
          Оформити замовлення
        </button>


      </div>

    </main>
  );
} 