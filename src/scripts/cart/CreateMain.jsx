import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import styles from "../../styles/pages/cart.module.css";

import Meal from "./materials/CreateMeal.jsx";
import getTotalPrice from "../shared/getTotalPrice.jsx";
import menuData from "../../data/menu/menuData.js";

import { SiInstacart } from "react-icons/si";


export default function CreateMain(props) {
  const totalPrice = getTotalPrice(props.cart);

  console.log(props.isLoggined)

  return (
    <>
    { props.cart.length === 0 ?
    <main>
      <div className={`${styles.emptyCartContainer} text-black h-[400px] mt-[80px] w-[100%] flex flex-col justify-center items-center text-[2rem]`}>
        <div>
          Кошик пустий, оберіть щось в&nbsp;<Link to="/menu" className="text-blue-700 underline cursor-pointer">меню</Link>
        </div>
        <SiInstacart className="ml-[10px] "/>
      </div>
    </main> :

    <main className={`${styles.mainContainer} mt-[80px] text-black mb-[50px]`}>
      <div className={` w-[100%] flex flex-col items-center justify-center mt-[50px] p-[15px] pb-[5px]`}>
        {
          props.cart.map(item => (<Meal id={item.id} amount={item.amount} handleAmountChange={props.handleAmountChange} />))
        }
      </div>
      <div className={`${styles.orderContainer} flex flex-col text-[1.4rem] mt-[100px]`}>
        <label htmlFor="orderComment" className={`${styles} text-[1.2rem]`}>Коментар до замовлення</label>
        <input name="orderComment" className={`${styles.orderCommentInput} border border-gray-400 p-[8px] mb-[20px]`} placeholder="Подвійна порція м'яса.."/>
        <div className={`${styles.totalCost} border-b-[1px] border-black black p-[10px] mb-[80px]`}>
          Загальна сума замовлення: {totalPrice}грн
        </div>

        {props.isLoggined ? 
        <Link to="/success" className="flex items-center justify-center">
          <button className={`${styles.totalCost} bg-custom-green text-white p-[10px] mb-[40px]`}>
            Оформити замовлення
          </button>
        </Link> :

        <Link to="/order" className="flex items-center justify-center">
        <button className={`${styles.totalCost} bg-custom-green text-white p-[10px] mb-[40px]`}>
          Оформити замовлення
        </button>
      </Link>} 

      </div>
    </main>
    }
    </>
  );
} 
