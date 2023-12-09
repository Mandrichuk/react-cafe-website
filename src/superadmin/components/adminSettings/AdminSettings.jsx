import React from "react";
import { Link } from "react-router-dom";


export default function CreateAdminSettings() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="staffContent">
        <div className="flex flex-col mb-[15px]  ">
          <label for="login" className="text-[1.2rem] text-gray-600">
            Введіть логін
          </label>
          <input placeholder="Логін" id="login" className="input" />
        </div>

        <div className="flex flex-col mb-[15px]  ">
          <label for="password" className="text-[1.2rem] text-gray-600">
            Введіть пароль
          </label>
          <input placeholder="Пароль" id="password" className="input" />
        </div>

        <div className="flex flex-col mb-[40px] ">
          <label for="password-confirm" className="text-[1.2rem] text-gray-600">
            Підтвердіть пароль
          </label>
          <input placeholder="Пароль" id="password-confirm" className="input" />
        </div>

        <Link to="/superadmin" className="btn">
          Підтвердити
        </Link>
      </div>
    </div>
  );
}
