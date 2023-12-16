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
        <Link to="/superadmin/nav">
          <img className={`h-[25px] object-cover`} src={images.textLogo} />
        </Link>

        <div>
          <Link to="/superadmin/nav" className="px-[10px] py-[15px]">
            Головна
          </Link>
          <Link to="/menu" className="px-[10px] py-[15px]">
            Меню
          </Link>
          <Link to="/superadmin/admin" className="px-[10px] py-[15px]">
            Адміністратор
          </Link>
          <Link to="/superadmin/admin" className="px-[10px] py-[15px]">
            Баннери
          </Link>
        </div>
      </div>
    </div>
  );
}
