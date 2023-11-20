import React from "react";
import styles from "../../../styles/pages/profile.module.css";

import getMealName from "../../shared/getMeal.js";
import getTotalPrice from "../../shared/getTotalPrice.js";

export default function CreateHistory(props) {
  return (
    <div className={`${styles.orderContainer} flex flex-col items-center mb-[30px] w-[50%]`}>
      <div className={`${styles.dateAndPriceContainer} flex flex-row items-center mb-[10px] w-[100%]`}>
        <div className={`${styles.dateContainer} flex items-center justify-center  w-[50%] p-[5px] pr-[10px] pl-[10px] text-[1.2rem] border  `}>
          {props.history.date}
        </div>
        <div className={`${styles.priceContainer} flex items-center justify-center w-[50%] p-[5px] pr-[10px] pl-[10px] text-[1.2rem] border  `}>
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
    <div className={`${styles.allMealsContainer} border-t-[1px] w-[100%] flex flex-col items-center justify-center border p-[10px]`}>
      <div className={`${styles.mealContainer} w-[100%] flex flex-row items-center justify-between text-[1.3rem]`}>
        <div className={`${styles.mealNameContainer} ml-[18%]`}>
          {currentMeal.name}
        </div>
        <div className={`${styles.mealAmountContainer} mr-[18%]`}>
          {props.meal.amount}
        </div>
      </div>
    </div>
    </>
  );
}