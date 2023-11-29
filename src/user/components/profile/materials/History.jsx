import React from "react";
import styles from "../../../styles/pages/profile.module.css";

import getMealName from "../../shared/getMeal.js";
import getTotalPrice from "../../shared/getTotalPrice.js";

export default function CreateHistory(props) {
  return (
    <div className={`${styles.orderContainer} flex flex-col items-center mb-[20px] w-full`}>
      <div className={`${styles.dateAndPriceContainer} flex flex-row justify-between mb-[10px] w-full`}>
        <div className={`${styles.dateContainer} flex items-center justify-center  w-full  titleText input rounded-r-none`}>
          {props.history.date}
        </div>
        <div className={`${styles.priceContainer} flex items-center justify-center w-full input  rounded-l-none titleText `}>
          {props.history.price}грн
        </div>
      </div>
      { props.history.cart && props.history.cart.map(meal => {
        return <CreateHistoryItem meal={meal}/>
      })
      }
    </div>
  );
}

function CreateHistoryItem(props) {
  const currentMeal = getMealName(props.meal.id);
  return (
    <>
    <div className={`${styles.allMealsContainer}  w-full flex flex-col justify-between input mb-[6px]`}>
      <div className={`${styles.mealContainer} w-full flex flex-row items-center justify-between text-[1.3rem]`}>
        <div className={`${styles.mealNameContainer} ml-[3%]`}>
          {currentMeal.name}
        </div>
        <div className={`${styles.mealAmountContainer} mr-[3%]`}>
          {props.meal.amount}
        </div>
      </div>
    </div>
    </>
  );
}