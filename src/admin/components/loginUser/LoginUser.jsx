import React from "react";
import Header from "../header/Header";
import styles from "./loginUser.module.css";

function LoginUser() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Header />
      <div className={`staffContent`}>
        <div className="titleText">Увійти</div>

        <div className={`${styles.loginContainer} flex flex-col items-center`}>
          <div className={`pretitleText w-full mb-3`}>
            Для замовлення введіть номер:
          </div>
          <input
            type="tel"
            className="w-full input mb-3"
            placeholder="Введіть номер"
          />
          <button className="w-full btn">Увійти</button>
        </div>
      </div>
    </div>
  );
}

export default LoginUser;
