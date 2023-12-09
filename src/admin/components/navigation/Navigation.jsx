import React from "react";
import { Link } from "react-router-dom";
import Header from "../header/Header";

export default function Navigation() {
  return (
    <>
      <Header />
      <div className="w-full flex flex-col items-center justify-center">
        <div className="staffContent flex flex-col">
          <div className={`titleText mb-[20px]`}>Адміністратор</div>
          <Link to="/admin/login/user" className="flex mb-[10px] btn">
            Увійти як користувач
          </Link>
        </div>
      </div>
    </>
  );
}
