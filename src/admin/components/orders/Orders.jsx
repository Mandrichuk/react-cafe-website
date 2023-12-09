import React from "react";
import styles from "./orders.module.css";
import Order from "./materials/Order";
import Header from "../header/Header";


function Orders() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <Header />
      <div className="staffContent">
        <div className="w-full flex flex-row items-center justify-between mb-[20px]">
          <div className={`${styles.timeContainer}  input`}>Дата</div>
          <ul className={`${styles.accordion} flex-1 input`}>Замовлення</ul>
          <div className={`${styles.priceContainer} input`}>Ціна</div>
          <div className={`${styles.statusContainer} input`}>Статус</div>
        </div>

        <Order />
      </div>
    </div>
  );
}

export default Orders;
