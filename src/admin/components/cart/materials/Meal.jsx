import React, { useState, useEffect } from "react";
import styles from "../../../styles/pages/cart.module.css";
import { useDispatch } from "react-redux";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import getMealPrice from "../../../../utils/getMealPrice";
import getMealName from "../../../../utils/getMeal";
import {
  removeFromAdminCart,
  addToAdminCart,
} from "../../../../features/carts";


export default function CreateMeal(props) {
  const dispatch = useDispatch();
  const mealPrice = getMealPrice(props.id, props.amount);
  const currentMeal = getMealName(props.id);

  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 500);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 500);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`${styles.mealContainer} input w-full flex items-center justify-between`}
    >
      <div className={`${styles.mealNameContainer} max-w-[300px] flex`}>
        {currentMeal.name}
      </div>

      {isWideScreen ? (
        <div className={`flex flex-row items-center`}>
          <div
            className={`${styles.amoutContainer} flex flex-row items-center justify-between`}
          >
            <button
              onClick={() =>
                dispatch(removeFromAdminCart({ id: props.id, amount: 1 }))
              }
              className={`${styles.amountBtn} flex items-center justify-center bg-gray-300 h-[48px] w-[50px]`}
            >
              <AiOutlineMinus />
            </button>
            <div
              className={`${styles.amoutText} flex items-center justify-center h-[48px] w-[50px] `}
            >
              {props.amount}
            </div>
            <button
              onClick={() =>
                dispatch(addToAdminCart({ id: props.id, amount: 1 }))
              }
              className={`flex items-center justify-center text-[1.7rem] bg-gray-300 h-[48px] w-[50px]`}
            >
              <AiOutlinePlus />
            </button>
          </div>
          <div
            className={`${styles.priceContainer} flex flex-row justify-center items-center ml-[20px] h-[48px]`}
          >
            {mealPrice}грн
          </div>
        </div>
      ) : (
        <>
          <div
            className={`${styles.amoutContainer} flex flex-row items-center justify-between`}
          >
            <button
              onClick={() =>
                dispatch(removeFromAdminCart({ id: props.id, amount: 1 }))
              }
              className={`${styles.amountBtn} flex items-center justify-center bg-gray-300 h-[48px] w-[50px]`}
            >
              <AiOutlineMinus />
            </button>
            <div
              className={`${styles.amoutText} flex items-center justify-center h-[48px] w-[50px] `}
            >
              {props.amount}
            </div>
            <button
              onClick={() =>
                dispatch(addToAdminCart({ id: props.id, amount: 1 }))
              }
              className={`flex items-center justify-center text-[1.7rem] bg-gray-300 h-[48px] w-[50px]`}
            >
              <AiOutlinePlus />
            </button>
          </div>
          <div
            className={`${styles.priceContainer} flex flex-row justify-center items-center  h-[48px]`}
          >
            {mealPrice}грн
          </div>
        </>
      )}
    </div>
  );
}
