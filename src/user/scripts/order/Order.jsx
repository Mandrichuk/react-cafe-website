import React, { useState } from "react";
import {Link} from "react-router-dom";
import styles from "../../styles/pages/order.module.css";


import Header from "../shared/header/Header.jsx";


export default function CreateOrder(props) {
  const [phoneNumber, setPhoneNumber] = useState("");

  function handleInputChange(event) {
    setPhoneNumber(event.target.value);
  }


  return (
    <>
      <Header />
      <main className={`${styles.main} text-black`}>

        <div className={`${styles.loginContainer} w-[55%] h-[100vh] flex flex-col justify-center items-center pl-[5%] pr-[5%]`}>

        <div className={`${styles.nameContainer} p-[5px] text-[3rem] `}>
        <p className={`font-bold min-w-[350px]`}>Останій крок!</p>
        </div>

        <div className={`${styles.tagline}  text-[1rem] mb-[40px] text-gray-500`}>
          Підтвердіть ваше замовлення
        </div>
        <div className={`${styles} min-w-[400px] flex items-center justify-center flex-col`}>
        </div>

        <div className={`${styles.enterPhoneContainer} flex flex-col  mb-[40px]`}>
          <label htmlFor="phone" className={`${styles.phoneInputLabel} text-[1.1rem]`}>Номер телефону:</label>
          <div className="text-[1.3rem] flex flex-row items-center justify-center mb-[20px]">

          <input
            type="tel"
            id="phone"
            name="phone"
            value={phoneNumber}
            onChange={handleInputChange}
            className={`${styles.phoneInput} text-[1.3rem] w-[170px] border border-gray-200 pl-[5px]`}
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            placeholder="+380.."
            required
          />
          </div>
          <button onClick={() => props.handleLoggining(phoneNumber)} className={`${styles.getCodeBtn, styles.btn} p-[10px] border text-white transition-all `}>
            Отримати код
          </button>
        </div>
        <div className={`${styles.enterPhoneContainer} flex flex-col items-center justify-center w-[100%]`}>
          <label htmlFor="phone" className={`${styles.phoneInputLabel} text-[1.1rem]`}>Код з СМС:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className={`${styles.phoneInput} text-[1.3rem] w-[170px] border border-gray-200 mb-[20px] pl-[5px]`}
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            placeholder="####"
            required
            />
          <Link to="/success" className="w-[170px] flex flex-col items-center justify-center">
            <button className={`${styles.loginBtn, styles.btn} w-[100%] p-[10px] border text-white transition-all `}>
              Підтвердити
            </button>
          </Link>
        </div>

        </div>
      </main>
    </>
  );
}