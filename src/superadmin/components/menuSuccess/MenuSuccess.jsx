import React from "react";
import { Link } from "react-router-dom";

export default function MenuSuccess() {
  return (
    <div className={`flex flex-col items-center justify-center h-[70vh]`}>
      <div className={`text-[1.8rem]`}>
        <div>Страва оновлена успішно! </div>
        <div>
          Переглянути оновлене{" "}
          <Link to="/superadmin/menu" className={`text-blue-700`}>
            "Меню"
          </Link>
        </div>
        <div>
          Повернутися до{" "}
          <Link to="/superadmin" className={`text-blue-700`}>
            "Головної"
          </Link>{" "}
        </div>
      </div>
    </div>
  );
}
