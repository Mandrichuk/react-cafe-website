import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styles from "../../styles/pages/cart.module.css";

import Header from "../shared/header/Header";

import Meal from "./materials/Meal.jsx";
import getTotalPrice from "../shared/getTotalPrice.js";
import menuData from "../../../data/menu/menuData.js";

import { SiInstacart } from "react-icons/si";

export default function CreateCart(props) {
  const totalPrice = getTotalPrice(props.cart);
  const [commentInput, setCommentInput] = useState("");
  const MaxSymbols = 100;

  function handleInputChange(e) {
    let inputValue = "";

    if (e.target.value !== " ") inputValue = e.target.value;

    if (inputValue.length <= MaxSymbols || inputValue === "Ваше ім'я") {
      setCommentInput(inputValue);
    }
  }



  return (
    <>
      <Header />
    { props.cart.length === 0 ?
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
      
      <div className={` ${styles.allMeals} w-full flex flex-col items-center justify-center mt-[50px] max-w-[800px] min-w-[450px]`}>
        {
          props.cart.map(item => (<Meal id={item.id} amount={item.amount} handleAmountChange={props.handleAmountChange} />))
        }
      </div>
      <div className={`${styles.orderContainer} flex-1 max-w-[600px] flex flex-col text-[1.4rem] mt-[50px]`}>

        <div className={`${styles.orderComment} w-full flex flex-row justify-between`}>
          <label htmlFor="orderComment" className={`${styles} text-[1.2rem]`}>Коментар до замовлення</label>
          <div className={`text-[1rem] mr-3 text-gray-500`}>
            {commentInput.length}/{MaxSymbols}
          </div>
        
        </div>
        <input value={commentInput} onChange={handleInputChange}  name="orderComment" className={`input mb-[20px]`} placeholder="Подвійна порція м'яса.."/>
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
    }
    </>
  );
}
