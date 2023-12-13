import React, {useState} from "react";
import styles from "../orders.module.css";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";



function Order() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="w-full flex flex-row items-center justify-between mb-[20px]"
      onClick={toggleAccordion}
    >
      <div className={`${styles.timeContainer}  input`}>Дата</div>
      <ul
        className={`${styles.accordion} ${styles.orderContainer} flex-1 input flex flex-row items-center justify-between`}
      >
        {isOpen ? (
          <MdKeyboardArrowUp className={`${styles.downArrow} text-black`} />
        ) : (
          <MdOutlineKeyboardArrowDown
            className={`${styles.downArrow} text-black`}
          />
        )}
        Замовлення
        <div></div>
      </ul>
      <div className={`${styles.priceContainer} input`}>Ціна</div>
      <div className={`${styles.statusContainer} input`}>Статус</div>
    </div>
  );
}







export default Order;
