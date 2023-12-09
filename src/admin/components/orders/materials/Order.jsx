import React from "react";
import styles from "../../../styles/pages/orders.module.css";

function Order() {
  return (
    <div className="w-full flex flex-row items-center justify-between">
      <div className={`${styles.timeContainer}  input`}>19:34</div>
      <ul className={`${styles.accordion} flex-1 input`}>Замовлення</ul>
      <div className={`${styles.priceContainer} input`}>320грн</div>
      <div className={`${styles.statusContainer} input h-[45.6px]`}>
        <input type="checkbox" />``
      </div>
    </div>
  );
}

export default Order;
