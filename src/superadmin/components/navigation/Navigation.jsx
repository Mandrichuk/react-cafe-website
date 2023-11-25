import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="staffContent flex flex-col">
        
        <div className={`titleText mb-[20px]`}>Супер Адміністратор</div>


        <Link to="/superadmin/menu" className="flex mb-[10px] btn">
          Налаштування "Меню"
        </Link>

        <Link to="/superadmin/admin" className="flex btn">
          Налаштування "Адміністратора"
        </Link>

      </div>
    </div>
  );
}