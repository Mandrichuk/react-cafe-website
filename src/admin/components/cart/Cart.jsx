import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styles from "../../styles/pages/cart.module.css";

import Header from "../shared/Header";


// import Meal from "./materials/Meal.jsx";
// import getTotalPrice from "../shared/getTotalPrice.js";
// import menuData from "../../../data/menu/menuData.js";

import { SiInstacart } from "react-icons/si";

export default function CreateCart() {
  // const totalPrice = getTotalPrice(props.cart);

  return (
    <>
      <Header />
    {/* { props.cart.length === 0 ?
    <main className={`${styles.mainEmptyContainer}`}>
      <div className={`${styles.emptyCartContainer}`}>
        <div className={`${styles.textContainer}`}>
          Кошик пустий, оберіть щось в&nbsp;<Link to="/menu" onClick={props.RerenderHeader} 
          className={styles.link}>меню</Link>
        </div>
      </div>
    </main> :

    <main className={`w-full`}>
      <div className={`${styles.mainContainer} text-black`}>
      
      <div className={` ${styles.allMeals} w-[100%] flex flex-col items-center justify-center mt-[50px] max-w-[800px] min-w-[450px]`}>
        {
          props.cart.map(item => (<Meal id={item.id} amount={item.amount} handleAmountChange={props.handleAmountChange} />))
        }
      </div>
      <div className={`${styles.orderContainer} flex flex-col text-[1.4rem] mt-[100px]`}>
        <label htmlFor="orderComment" className={`${styles} text-[1.2rem]`}>Коментар до замовлення</label>
        <input name="orderComment" className={`input mb-[20px]`} placeholder="Подвійна порція м'яса.."/>
        <div className={`${styles.totalCost} border-b-[1px] border-black black p-[10px] mb-[80px]`}>
          Загальна сума замовлення: {totalPrice}грн
        </div>

        {props.isLoggined ? 
        <Link onClick={props.RerenderHeader} to="/success" className="btn flex items-center justify-center">
            Оформити замовлення
        </Link> :

        <Link onClick={props.RerenderHeader} to="/order" className="btn flex items-center justify-center">
          Оформити замовлення
      </Link>} 

      </div>
      </div>
    </main>
    } */}
    </>
  );
}
