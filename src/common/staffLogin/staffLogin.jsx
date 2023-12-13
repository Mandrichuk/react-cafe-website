import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import AnimatedLine from "../../animations/AnimatedLine";
import EmptyHeader from "../../common/EmptyHeader";
import { adminData, superAdminData } from "../../constants/index";
import { toggleAdminLogin, toggleSuperAdminLogin } from "../../features/loggins";


export default function CreateApp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginInput, setLoginInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  function userDataValid() {
    if (
      loginInput === adminData.login &&
      passwordInput === adminData.password
    ) {
      dispatch(toggleSuperAdminLogin(false));
      dispatch(toggleAdminLogin(true));
      navigate("/admin/nav");
    }

    if (
      loginInput === superAdminData.login &&
      passwordInput === superAdminData.password
    ) {
      dispatch(toggleAdminLogin(false));
      dispatch(toggleSuperAdminLogin(true));
      navigate("/superadmin/nav");
    }
  }

  return (
    <div className="w-full flex items-center justify-center">
      <EmptyHeader />
      <div className="staffContent mt-[100px]">
        <div className={`titleText`}>
          <AnimatedLine />
          <p className={`font-bold`}>Вхід для персоналу</p>
        </div>

        <div className="flex flex-col mb-[20px] w-full">
          <label forHTML="login" className="text-[1.2rem] text-gray-600">
            Введіть логін
          </label>
          <input
            onChange={(event) => setLoginInput(event.target.value)}
            placeholder="Логін"
            id="login"
            className="input"
          />
        </div>

        <div className="flex flex-col mb-[30px] w-full">
          <label forHTML="password" className="text-[1.2rem] text-gray-600">
            Введіть пароль
          </label>
          <input
            onChange={(event) => setPasswordInput(event.target.value)}
            placeholder="Пароль"
            id="password"
            className="input border-black"
          />
        </div>
        <button className="btn w-[100%]" onClick={userDataValid}>
          Увійти
        </button>
      </div>
    </div>
  );
}
