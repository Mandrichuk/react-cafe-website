import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./order.module.css";
import AnimatedLine from "../../../motion/AnimatedLine";
import Header from "../header/Header";


export default function CreateOrder(props) {
  const [phoneNumber, setPhoneNumber] = useState("");

  function handleInputChange(event) {
    setPhoneNumber(event.target.value);
  }

  return (
    <>
      <Header />
      <main className={`${styles.main} text-black`}>
        <div
          className={`${styles.loginContainer} w-[55%] h-[80vh] flex flex-col justify-center items-center`}
        >
          <AnimatedLine />
          <div className={`${styles.nameContainer}`}>
            <p className={`titleText`}>Останій крок!</p>
          </div>

          <div className={`pretitleText mb-5`}>Підтвердіть ваше замовлення</div>

          <div
            className={`${styles} min-w-[400px] flex items-center justify-center flex-col`}
          ></div>

          <div
            className={`${styles.enterPhoneContainer} flex flex-col  mb-[40px]`}
          >
            <label htmlFor="phone" className={`pretitleText`}>
              Номер телефону:
            </label>
            <div className="text-[1.3rem] flex flex-row items-center justify-center mb-[20px]">
              <input
                type="tel"
                id="phone"
                name="phone"
                value={phoneNumber}
                onChange={handleInputChange}
                className={`input`}
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                placeholder="+380.."
                required
              />
            </div>
            <button
              onClick={() => props.handleLoggining(phoneNumber)}
              className={`btn`}
            >
              Отримати код
            </button>
          </div>
          <div className={`${styles.enterPhoneContainer} flex flex-col`}>
            <label htmlFor="phone" className={`pretitleText`}>
              Код з СМС:
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className={`input mb-[20px]`}
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              placeholder="####"
              required
            />
            <Link to="/success" className="btn w-full">
              Підтвердити
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
