import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/pages/login.module.css";

export default function CreateApp() {
  return (
    
    <div className="text-black flex flex-col items-center justify-center h-[80vh] text-[1.3rem]">

      <div className={`${styles.nameContainer} p-[5px] text-[4rem] `}>
        <p className={`font-bold`}>Drink&Food</p>
      </div>

      <div className="flex flex-col items-center justify-center w-[100%]">


        <div className="flex flex-col mb-[20px] mr-[20px] w-[40%] max-w-[300px]">
          <label for="login" className="text-[1.2rem] text-gray-600">Введіть логін</label>
          <input placeholder="Логін" id="login" className="border-[2px] border-l-[10px] p-[10px] pt-[5px] pb-[5px] border-black"/>
        </div>

        <div className="flex flex-col mb-[30px] mr-[20px] w-[40%] max-w-[300px]">
          <label for="password" className="text-[1.2rem] text-gray-600">Введіть пароль</label>
          <input placeholder="Пароль" id="password" className="border-[2px] border-l-[10px] p-[10px] pt-[5px] pb-[5px] border-black"/>
        </div>

      </div> 
      <Link to="/superadmin" className="w-[40%] max-w-[300px] mr-[20px]">
        <button className=" bg-custom-green text-white p-[20px] pt-[10px] pb-[10px] w-[100%]">Увійти</button>
      </Link>
    </div>
  )
}