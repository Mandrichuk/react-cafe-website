import React, { useState } from "react";
import styles from "./login.module.css";
import Header from "../header/Header";
import AnimatedLine from "../../../animations/AnimatedLine";
import images from "../../../constants/index";

export default function CreateLogin(props) {
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
      <div
        className={`${styles.mainContainer} h-[80vh] flex flex-row items-center justify-center`}
      >
        <div className={`${styles.ImgContainer} w-[45%] h-[100vh]`}>
          <img
            className={`${styles.bgImg} w-[100%] h-[100%] object-cover`}
            src={images.hotDog}
          />
        </div>

        <div
          className={`${styles.loginContainer} w-[55%] h-[100vh] flex flex-col justify-center items-center pl-[5%] pr-[5%]`}
        >
          <div className={`${styles.nameContainer} p-[5px] text-[3rem] flex flex-col items-center justify-center`}>
            <AnimatedLine />
            <p className={`${styles.titleText}`}>Регестрація</p>
          </div>

          <div
            className={`${styles.tagline} ${styles.articleText} mb-[40px] text-gray-500`}
          >
          {/* <img src={images.friesSVG} className={``}  alt={"fries-decoration"}/> */}
            Реєструйтесь та отримуй 5% бонусних накопичень з кожного заказу!
          </div>

          <div className={`${styles.enterContainer} flex flex-col mb-[40px]`}>
            <label
              htmlFor="phone"
              className={`${styles.inputLabel} ${styles.pretitleText}`}
            >
              Номер телефону:
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={phoneNumber}
              onChange={handleChange}
              className={`input mb-[10px]`}
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              placeholder="+380.."
              required
            />
            <button
              onClick={handleSubmit}
              className={`btn p-[10px] border text-white transition-all `}
            >
              Отримати код
            </button>
          </div>

          <div className={`${styles.enterContainer} flex flex-col`}>
            <label
              htmlFor="phone"
              className={`${styles.inputLabel} ${styles.pretitleText} text-[1.1rem]`}
            >
              Код з СМС:
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className={`input mb-[10px]`}
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              placeholder="####"
              required
            />
            <button className={`btn `}>Увійти</button>
          </div>
        </div>
      </div>
    </>
  );
}
