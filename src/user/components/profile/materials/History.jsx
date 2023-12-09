import React, { useState } from "react";
import styles from "../profile.module.css";
import getMealName from "../../../../utils/getMeal";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";


export default function History(props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className={`${styles.liContainer}`}>
      <div
        className={`${styles.scale} flex items-center justify-between p-[10px] font-bold`}
        onClick={toggleAccordion}
      >
        {isOpen ? (
          <MdKeyboardArrowUp className={`${styles.downArrow} text-black`} />
        ) : (
          <MdOutlineKeyboardArrowDown
            className={`${styles.downArrow} text-black`}
          />
        )}
        <div className={`${styles.labelTitle}`}> {props.history.date}</div>
        <div className={`text-[1.2rem]`}>{props.history.price}грн</div>
      </div>
      <div
        className={`${styles.content}`}
        style={{
          maxHeight: isOpen ? "1500px" : "0",
          padding: isOpen ? "6px" : "0",
        }}
      >
        {HistoryItem(props.history.cart)}
      </div>
    </li>
  );
}


function HistoryItem(products) {
  if (!products) {
    return null;
  }

  const productsHTML = products.map((item) => {
    const mealName = getMealName(item.id)["name"];

    return (
      <div
        key={item.id}
        className={`${styles.mealContainer} text-black  flex flex-row items-center justify-between pb-[20px] text-[1.3rem] px-[10px]`}
      >
        <div className={`${styles.mealNameContainer}`}>{mealName}</div>
        <div className={`${styles.amountContainer}`}>{item.amount}</div>
      </div>
    );
  });

  return productsHTML;
}
