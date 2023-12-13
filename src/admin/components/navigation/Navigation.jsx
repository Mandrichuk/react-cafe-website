import React from "react";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import styles from "./navigation.module.css";
import AnimatedLine from "../../../animations/AnimatedLine";

export default function Navigation() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Header />
      <div className={`staffContent`}>
        <div className="titleText">
          <AnimatedLine />
          Увійти як користувач
        </div>

        <div className={`${styles.loginContainer} flex flex-col items-center`}>
          <div className={`pretitleText w-full mb-3`}>
            Для замовлення введіть номер:
          </div>
          <input
            type="tel"
            className="w-full input mb-3"
            placeholder="Введіть номер"
          />
          <Link to="/menu" className="w-full btn">Увійти</Link>
        </div>

        <div className="titleText mt-[80px]">
          <AnimatedLine />
          Замовлення
        </div>

        <div className={`${styles.loginContainer} flex flex-col items-center`}>
          <div className={`pretitleText w-full mb-3`}>
            Всі онлайн замовлення
          </div>
          <Link to="/admin/orders" className="w-full btn">
            Перейти
          </Link>
        </div>
      </div>
    </div>
  );
}
