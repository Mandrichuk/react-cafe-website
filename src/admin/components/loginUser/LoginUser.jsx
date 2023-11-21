import React from 'react';
import { Link } from 'react-router-dom';

import Header from "../shared/Header";
import styles from "../../styles/pages/loginUser.module.css";

function LoginUser() {
  return (
    <>
      <Header />
      <div className={`${styles} flex flex-col justify-center items-center w-full h-[80vh]`}>
        
        <div className='titleText mx-[10%]'>Головна сторінка адміну</div>

        <div className={`${styles.loginContainer} w-[350px] flex flex-col items-center`}>
          <div className={`pretitleText w-full mb-3`}>Для замовлення введіть номер:</div>
          <input type="tel" className='w-full input mb-3' placeholder='Введіть номер'/>
          <button className='w-full btn'>Увійти</button>

        </div>
      </div>
    </>
  );
}

export default LoginUser;