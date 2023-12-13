import React, {useState} from "react";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import styles from "./navigation.module.css";
import AnimatedLine from "../../../animations/AnimatedLine";
import isPhoneValid from "../../../utils/isPhoneValid";
import images from "../../../constants/index";


export default function Navigation() {
    const [phoneNumber, setPhoneNumber] = useState("");

    function handleChange(event) {
      setPhoneNumber(event.target.value);
    }

    function handleSubmit() {
      isPhoneValid(phoneNumber);
    }

  return (
  <>


      <div className="w-full flex flex-col justify-center items-center">
      <Header />
      <div className={`staffContent`}>
        <div className="titleText mb-3">


      <div className="titleText">
        <AnimatedLine />
        Замовлення
      </div>

      <div className={`${styles.loginContainer} flex flex-col items-center`}>
        <div className={`pretitleText w-full mb-3 font-medium`}>
          Всі онлайн замовлення
        </div>
        <Link to="/admin/orders" className="w-full btn mb-[50px]">
          Перейти
        </Link>

      <img src={images.friesSVG} className={`mb-[50px]`} />

      </div>

        <AnimatedLine />
        Акаунт замовника
        </div>

        <div className={`pretitleText flex flex-col`}>
          <label
            htmlFor="phone"
            className={`${styles.inputLabel} ${styles.pretitleText}`}
          >
            Введіть ім'я: <span className={`text-gray-500 text-[1.1rem]`}>(за бажанням)</span>
          </label>
          <input
            className={`input ${styles.NameInput} ${styles.pretitleText} border border-gray-200 mb-[20px] pl-[5px]`}
            placeholder="Введіть ім'я... "
            required
          />
        </div>

        <div className={`pretitleText flex flex-col mb-[10px]`}>
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
            className={`input ${styles.pretitleText} border border-gray-200 mb-[20px] pl-[5px]`}
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            placeholder="+380.."
            required
          />
          <button
            onClick={handleSubmit}
            className={`btn ${styles.pretitleText} p-[10px] border text-white transition-all `}
          >
            Отримати код
          </button>
        </div>

        <div className={`pretitleText flex flex-col mb-[40px]`}>
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
            className={`input ${styles.pretitleText}  border border-gray-200 mb-[20px] pl-[5px]`}
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            placeholder="####"
            required
          />
          <button
            className={`btn ${styles.pretitleText} p-[10px] border text-white transition-all `}
          >
            Увійти
          </button>
        </div>

        </div>
      </div>
    </>
  );
}
