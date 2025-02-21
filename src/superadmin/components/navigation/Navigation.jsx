import React from "react";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import AnimatedLine from "../../../animations/AnimatedLine";
import styles from "./navigation.module.css";
import { useDispatch } from "react-redux";
import { toggleSuperAdminLogin } from "../../../features/loggins";


export default function Navigation() {
  const dispatch = useDispatch();
  
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <Header />
      <div className="staffContent flex flex-col">
        <AnimatedLine />
        <div className={`titleText mb-[20px]`}>Супер Адміністратор</div>

        <Link to="/menu" className="flex mb-[10px] btn">
          Налаштування "Меню"
        </Link>
        <Link to="/superadmin/admin" className="flex btn mb-[10px]">
          Налаштування "Адміністратора"
        </Link>
        <Link to="/news" className="flex btn mb-[10px]">
          Налаштування "Баннеров"
        </Link>

        <Link 
          to="/" className={`${styles.logoutBtn} flex btn mb-[10px]`}
          onClick={() => { dispatch(toggleSuperAdminLogin(false)); }}
        >
          Вихід
        </Link>
      </div>
    </div>
  );
}
