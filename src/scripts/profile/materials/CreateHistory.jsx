import React from "react";
import styles from "../../../styles/pages/profile.module.css";

export default function CreateHistory() {
  return (
    <div className={`${styles.historyContainer} w-[100%] flex flex-col items-center justify-center text-[2.5rem] font-bold`}>
      Історія замовлень 
      <Order />
      <Order />
    </div>
  );
}


const Order = () => {
  return (
    <div className={`${styles.orderContainer} flex flex-col items-center mb-[30px] w-[50%]`}>

      <div className={`${styles.dateAndPriceContainer} flex flex-row items-center mb-[10px] w-[100%]`}>
        <div className={`${styles.dateContainer} flex items-center justify-center  w-[50%] p-[5px] pr-[10px] pl-[10px] text-[1.2rem] border  `}>
          Дата
        </div>
        <div className={`${styles.priceContainer} flex items-center justify-center w-[50%] p-[5px] pr-[10px] pl-[10px] text-[1.2rem] border  `}>
          Цена
        </div>
      </div>

      <div className={`${styles.allMealsContainer} border-t-[1px] w-[100%] flex flex-col items-center justify-center border p-[10px]`}>

        <div className={`${styles.mealContainer} w-[100%] flex flex-row items-center justify-between text-[1.3rem]`}>
          <div className={`${styles.mealNameContainer} ml-[18%]`}>
            Кофе
          </div>
          <div className={`${styles.mealAmountContainer} mr-[18%]`}>
            1
          </div>
        </div>
      </div>

      <div className={`${styles.allMealsContainer} border-t-[1px] w-[100%] flex flex-col items-center justify-center border p-[10px] mb-[10px]`}>

        <div className={`${styles.mealContainer} w-[100%] flex flex-row items-center justify-between text-[1.3rem]`}>
          <div className={`${styles.mealNameContainer} ml-[18%]`}>
            Бургер
          </div>
          <div className={`${styles.mealAmountContainer} mr-[18%]`}>
            2
          </div>
        </div>
      </div>



    </div>
  );
}