import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";
import images from "../../../constants/index";


export default function Header() {
  return (
    <div
      className={`${styles.header} fixed top-[0] flex flex-row items-center h-[70px] w-[100%] bg-black justify-between text-white text-[1.3rem]`}
    >
      <div className="flex justify-between mx-[35px] items-center w-full">
        <img className={`h-[25px] object-cover`} src={images.textLogo} />

        <div>
          <Link to="/admin/nav" className="px-[10px] py-[15px]">
            Головна
          </Link>
          <Link to="/admin/orders" className="px-[10px] py-[15px]">
            Замовлення
          </Link>
        </div>
      </div>


    </div>
  );
}
