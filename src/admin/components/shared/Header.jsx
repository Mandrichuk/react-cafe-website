import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/shared/header.module.css";


export default function Header() {
  return (
    <div
      className={`${styles.header} px-[20px] fixed top-[0] flex flex-row items-center h-[70px] w-[100%] bg-black justify-between text-white text-[1.3rem]`}
    >
      <div className="flex justify-center items-center w-full">
        <Link to="/admin/login/user" className="px-[10px] py-[15px]">
          На головну
        </Link>
        <Link to="/admin/orders" className="px-[10px] py-[15px]">
          Замовлення
        </Link>
        <Link to="/admin/client" className="px-[10px] py-[15px]">
          Профіль кліента
        </Link>
      </div>
      <div className="hidden sm:block" />
    </div>
  );
}
