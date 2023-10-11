import React from "react";
import styles from "../../styles/pages/login.module.css";

export default function CreateMain() {
  return (
    <div className={`${styles.mainContainer} flex flex-row items-center justify-center h-[90%]`}>
      <div className={`${styles.ImgContainer} w-[45%] h-[100vh]`}>
        <img className={`${styles.bgImg} w-[100%] h-[100%] object-cover`} src="images/decorations/hot-dog-login.jpg" />
      </div>
      
      <div className={`${styles.loginContainer} w-[55%] h-[100vh] flex flex-col justify-center items-center pl-[5%] pr-[5%]`}>

        <div className={`${styles.nameContainer} p-[5px] text-[3rem] `}>
        <p className={`font-bold`}>Drink&Food</p>
        </div>

        <div className={`${styles.tagline}  text-[1rem] mb-[40px] text-gray-500`}>
          Реєструйтесь та отримуй 5% бонусних накопичень з кожної покупки!
        </div>

        <div className={`${styles.enterPhoneContainer} flex flex-col  mb-[40px]`}>
          <label htmlFor="phone" className={`${styles.phoneInputLabel} text-[1.1rem]`}>Номер телефону:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className={`${styles.phoneInput} text-[1.3rem] w-[170px] border border-gray-200 mb-[20px] pl-[5px]`}
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            placeholder="+380.."
            required
          />
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
            Увійти
          </button>
        </div>

      </div>
    </div>
  )
}