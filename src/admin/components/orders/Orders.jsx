import React from "react";
import styles from "./orders.module.css";
import Order from "./materials/Order";
import Header from "../header/Header";
import AnimatedLine from "../../../animations/AnimatedLine";


export default function Orders() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <Header />
      <div className="staffContent">
        <AnimatedLine />
        <div className={`titleText mb-[20px]`}>Активні замовлення</div>

        <div className="w-full flex flex-row items-center justify-between mb-[20px]">
          <div className={`${styles.timeContainer} input pretitleText`}>Дата</div>
          <ul className={`${styles.accordion} ${styles.orderContainer} flex-1 input pretitleText`}>Замовлення</ul>
          <div className={`${styles.priceContainer} input pretitleText`}>Ціна</div>
          <div className={`${styles.statusContainer} input pretitleText`}>Статус</div>
        </div>

        <ul>
          <Order />
        </ul>

      </div>
    </div>
  );
}


// const OrderItems = (data, cart, handleCartChange) => {
//   const menuItems = data.map((item) => {
//     return (
//       <MenuItem
//         key={item.id}
//         cart={cart}
//         handleCartChange={handleCartChange}
//         {...item}
//       />
//     );
//   });
//   return menuItems;
// };
