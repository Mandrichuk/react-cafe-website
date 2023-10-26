import React from "react";
import styles from "../../styles/pages/adminSettings.module.css";
import { Link } from "react-router-dom";

export default function CreateAdminSettings() {
  return (
    <div className="mt-[80px] flex flex-col items-center justify-center h-[80vh]">

      <div className="flex flex-col mb-[15px] mr-[20px] w-[40%] max-w-[300px]">
        <label for="login" className="text-[1.2rem] text-gray-600">Введіть логін</label>
        <input placeholder="Логін" id="login" className="border-[2px] border-l-[10px] p-[10px] pt-[5px] pb-[5px] border-black"/>
      </div>

      <div className="flex flex-col mb-[15px] mr-[20px] w-[40%] max-w-[300px]">
        <label for="password" className="text-[1.2rem] text-gray-600">Введіть пароль</label>
        <input placeholder="Пароль" id="password" className="border-[2px] border-l-[10px] p-[10px] pt-[5px] pb-[5px] border-black"/>
      </div>

      <div className="flex flex-col mb-[40px] mr-[20px] w-[40%] max-w-[300px]">
        <label for="password-confirm" className="text-[1.2rem] text-gray-600">Підтвердіть пароль</label>
        <input placeholder="Пароль" id="password-confirm" className="border-[2px] border-l-[10px] p-[10px] pt-[5px] pb-[5px] border-black"/>
      </div>

      <Link to="/superadmin" className="w-[40%] max-w-[300px] mr-[20px]">
        <button className=" bg-custom-green text-white p-[20px] pt-[10px] pb-[10px] w-[100%]">Увійти</button>
      </Link>

    </div>
  );
}