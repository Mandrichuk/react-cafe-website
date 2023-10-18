import React, { useState } from "react";
import styles from "../../styles/pages/order.module.css";
import History from "./materials/CreateHistrory.jsx";

export default function CreateMain(props) {

  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <main className={`${styles.main} mt-[80px] text-black`}>

      <div className={`${styles.loginContainer} w-[55%] h-[100vh] flex flex-col justify-center items-center pl-[5%] pr-[5%]`}>

      <div className={`${styles.nameContainer} p-[5px] text-[3rem] `}>
      <p className={`font-bold min-w-[350px]`}>Останій крок!</p>
      </div>

      <div className={`${styles.tagline}  text-[1rem] mb-[40px] text-gray-500`}>
        Підтвердіть ваше замовлення
      </div>
      <div className={`${styles} min-w-[400px] flex items-center justify-center flex-col`}>
        {/* {props.history && props.history.map(item => <History {...item}/>)} */}
      </div>

      <div className={`${styles.enterPhoneContainer} flex flex-col  mb-[40px]`}>
        <label htmlFor="phone" className={`${styles.phoneInputLabel} text-[1.1rem]`}>Номер телефону:</label>
        <div className="text-[1.3rem] flex flex-row items-center justify-center mb-[20px]">

        <input
          type="tel"
          id="phone"
          name="phone"
          value={phoneNumber}
          className={`${styles.phoneInput} text-[1.3rem] w-[170px] border border-gray-200 pl-[5px]`}
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          placeholder="+380.."
          required
        />
        </div>
        <button className={`${styles.getCodeBtn, styles.btn} p-[10px] border text-white transition-all `}>
          Отримати код
        </button>
      </div>
      <div className={`${styles.enterPhoneContainer} flex flex-col`}>
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
        <button className={`${styles.loginBtn, styles.btn} p-[10px] border text-white transition-all `}>
          Підтвердити
        </button>
      </div>

      </div>
    </main>
  )
}