import React, { useState } from "react";
import styles from "../../styles/pages/registerUser.module.css";

import Header from "../shared/Header";


export default function RegisterUser(props) {
  const [phoneNumber, setPhoneNumber] = useState("");

  function handleChange(event) {
    setPhoneNumber(event.target.value);
  }

  function handleSubmit() {
    props.phoneNumberValid(phoneNumber);
  }


  return (
    <>
      <Header />

      <div className={`${styles.loginContainer} w-full h-[80vh] flex flex-col justify-center items-center pl-[5%] pr-[5%]`}>

        <div className={`${styles.nameContainer} p-[5px] text-[3rem] `}>
        <p className={`${styles.titleText}`}>Регестрація</p>
        </div>

        <div className={`${styles.tagline} ${styles.articleText} mb-[40px] text-gray-500`}>
          Реєструйтесь та отримуй 5% бонусних накопичень з кожного заказу!
        </div>

        <div className={`${styles.enterContainer} flex flex-col`}>
          <label htmlFor="phone" className={`${styles.inputLabel} ${styles.pretitleText}`}>Введіть ім'я:</label>
          <input
            className={`${styles.input} ${styles.pretitleText} border border-gray-200 mb-[20px] pl-[5px]`}
            placeholder="Введіть ім'я... "
            required
          />
          </div>
        
        <div className={`${styles.enterContainer} flex flex-col mb-[40px]`}>
          <label htmlFor="phone" className={`${styles.inputLabel} ${styles.pretitleText}`}>Номер телефону:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={phoneNumber}
            onChange={handleChange}
            className={`${styles.input} ${styles.pretitleText} border border-gray-200 mb-[20px] pl-[5px]`}
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            placeholder="+380.."
            required
          />
          <button onClick={handleSubmit} className={`${styles.getCodeBtn, styles.btn} ${styles.pretitleText} p-[10px] border text-white transition-all `}>
            Отримати код
          </button>
        </div>
        
        <div className={`${styles.enterContainer} flex flex-col`}>
          <label htmlFor="phone" className={`${styles.inputLabel} ${styles.pretitleText} text-[1.1rem]`}>Код з СМС:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className={`${styles.input} ${styles.pretitleText}  border border-gray-200 mb-[20px] pl-[5px]`}
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            placeholder="####"
            required
          />
          <button className={`${styles.loginBtn, styles.btn}  ${styles.pretitleText} p-[10px] border text-white transition-all `}>
            Увійти
          </button>
        </div>

      </div>
    </>
  );
}