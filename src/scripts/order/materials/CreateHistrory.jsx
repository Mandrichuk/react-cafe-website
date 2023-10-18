import React from "react";
import styles from "../../../styles/pages/profile.module.css";

import getMealName from "../../shared/getMealName.jsx";

export default function CreateHistory(props) {
  // console.log(props)
  return (
    <div className={`${styles.orderContainer} flex flex-col items-center mb-[30px] w-[50%]`}>
      {/* {props && props.cart && props.cart.map(meal => {
        return <CreateHistoryItem key={meal.id} meal={meal} />;
      })} */}
    </div>
  );
}

function CreateHistoryItem(props) {
  // const currentMeal = getMealName(props.meal.id);
  return (
    <>
      <div className={`${styles.allMealsContainer} w-[100%] flex flex-col items-center justify-center`}>
        <div className={`${styles.mealContainer} w-[100%] flex flex-row items-center justify-between text-[1.3rem]`}>
          <div className={`${styles.mealNameContainer}`}>
            {/* {currentMeal.name} */}
          </div>
          <div className={`${styles.mealAmountContainer}`}>
            {/* x{props.meal.amount} */}
          </div>
        </div>
      </div>
    </>
  );
}
