import React from "react";
import styles from "../../styles/pages/navigation.module.css";
import { Link } from "react-router-dom";

export default function CreateNavigation() {

  return (
    <div className="mt-[80px] flex flex-col justify-center items-center h-[70vh]">
      
      <div className={`${styles.tagline} text-[2.7rem] font-bold mb-[70px]`}>Супер Адміністратор</div>


      <Link to="/superadmin/menu">
        <button className={`${styles.menuBtn} text-[1.4rem] p-[20px] pr-[24px] pl-[24px] boder text-white bg-custom-green mb-[20px] w-[380px]`}>Налаштування "Меню"</button>
      </Link>

      <Link to="/superadmin/admin">
        <button className={`${styles.menuBtn} text-[1.4rem] p-[20px] pr-[24px] pl-[24px] boder text-white bg-custom-green w-[380px]`}>Налаштування "Адміністратора"</button>
      </Link>

    </div>
  );
}