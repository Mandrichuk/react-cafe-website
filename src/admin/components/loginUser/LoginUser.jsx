import React from 'react';
import { Link } from 'react-router-dom';

import Header from "../shared/Header";
import styles from "../../styles/pages/loginUser.module.css";

function LoginUser() {
  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <Header />
      <div className={`staffContent`}>
        
        <div className='titleText'>Увійти</div>

        <div className={`${styles.loginContainer} flex flex-col items-center`}>
          <div className={`pretitleText w-full mb-3`}>Для замовлення введіть номер:</div>
          <input type="tel" className='w-full input mb-3' placeholder='Введіть номер'/>
          <button className='w-full btn'>Увійти</button>

        </div>
      </div>
    </div>
  );
}

export default LoginUser;