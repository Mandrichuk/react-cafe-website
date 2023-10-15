import React from "react";

import styles from "../../../styles/pages/cart.module.css";

import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"; 
import menuData from "../../../data/menu/menuData.js";


export default function CreateMeal(props) {
  const mealPrice = getMealPrice(props.id, props.amount, menuData);

  let currentMeal;

  menuData.forEach(item => {
    item.products.forEach(meal => {
      if (meal.id === props.id) {
        currentMeal =  meal;
      }
    })
  })


  return (
    <div className={`${styles.mainContainer} text-black flex flex-row items-center justify-center mb-[10px] w-[80%]`}>
      <div className={`${styles.mealNameContainer} text-[1.7rem] flex-1 max-w-[400px] border border-gray-300 pl-[10px] pr-[10px] pt-[5px] pb-[5px] flex items-center justify-center mr-[10px]` }>
        {currentMeal.name}
      </div>
      <div className={`flex flex-row items-center`}>
      <div className={`${styles.amoutContainer} flex flex-row items-center mr-[10px]`}>
        <button onClick={() => props.handleAmountChange(props.id, props.amount, false)} className={`${styles.amountBtn} flex items-center justify-center text-[1.7rem] border bg-gray-300 border-gray-300 h-[48px] w-[50px]`}>
          <AiOutlineMinus />
        </button>
        <div className={`${styles.amoutText} flex items-center justify-center text-[1.7rem] border border-gray-300 h-[48px] w-[50px]`}>
          {props.amount}
        </div>
        <button onClick={() => props.handleAmountChange(props.id, props.amount, true)} className={`${styles.amountBtn} flex items-center justify-center text-[1.7rem] border bg-gray-300 border-gray-300 h-[48px] w-[50px]`}>
        <AiOutlinePlus />
        </button>
      </div>
      <div className={`${styles.priceContainer} w-[120px] flex flex-row justify-center items-center text-[1.7rem] border border-gray-300 h-[48px]`}>
        {mealPrice}грн
      </div>
      </div>
    </div>
  );
} 

function getMealPrice(id, amount, menuData) {
  let mealPrice = 0;
  menuData.forEach(item => {
    item.products.forEach(menuMeal => {
      if (id === menuMeal.id) {
        mealPrice = menuMeal.price * amount;
      }
    })
  });
  return mealPrice;
}