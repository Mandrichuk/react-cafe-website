import React, { useState, useEffect } from "react";
import styles from "./login.module.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import AnimatedLine from "../../../animations/AnimatedLine";
import { FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleUserLogin } from "../../../features/loggins";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import TabTitle from "../../../common/TabTitle";


export default function CreateLogin(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const userLogin = useSelector((state) => state.loggins.value.userLoggined);

  useEffect(() => {
    if (userLogin) {
      navigate("/profile")
    }
  }, [userLogin, navigate]);


  function handleChange(event) {
    setPhoneNumber(event.target.value);
  }

  function handleSubmit() {
    props.phoneNumberValid(phoneNumber);
  }

  return (
    <>
      <TabTitle title={"Увійти"} />
      <Header />
      <div
        className={`${styles.mainContainer} w-full flex flex-col justify-center items-center`}
      >
        <div
          className={`${styles.headerSection} w-full flex flex-col items-center justify-center text-white h-[300px]`}
        >
          <div className={`mx-[5%] w-full`}>
            <div
              className={`${styles.headerTitle} titleText flex flex-row items-center mb-[15px]`}
            >
              <div className="ml-[5%]">Увійти</div>
              <FaUser className="ml-[10px] text-[2rem]" />
            </div>
            <div
              className={`${styles.menuTaglineText} pretitleText mx-[5%] mb-2`}
            >
              Реєструйтесь та отримуй 5% бонусних накопичень з кожного заказу!
            </div>
            <Link
              to="/news#1"
              className={`${styles.menuTaglineText} pretitleText mx-[5%] underline font-bold text-[#ffbc0d]`}
            >
              Детальніше
            </Link>
          </div>
        </div>

        <div
          className={`${styles.loginContainer}  flex flex-col justify-center items-center `}
        >
          <div
            className={`${styles.nameContainer} mb-5  p-[5px] text-[3rem] flex flex-col items-center justify-center`}
          >
            <AnimatedLine />
            <p className={`${styles.titleText}`}>Введіть дані</p>
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
            <Link
              className={`btn p-[10px] border text-white transition-all `}
            >
              Отримати код
            </Link>
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
            <Link
              
              onClick={() => dispatch(toggleUserLogin({  
              userLoggined: true,
              adminLoggined: false,
              superAdminLoggined: false
              }))}
              className={`btn`}
            >
              Увійти
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
