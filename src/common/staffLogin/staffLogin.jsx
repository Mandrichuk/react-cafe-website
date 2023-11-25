import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleAdminLogin, toggleSuperAdminLogin } from "../../features/loggins";
import loginsData from "../../data/logins/logginsData";


export default function CreateApp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loginInput, setLoginInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const { admin, superadmin } = loginsData.logins;

  function userDataValid() {
    if (loginInput === admin.login && passwordInput === admin.password) {
      dispatch(toggleSuperAdminLogin(false));
      dispatch(toggleAdminLogin(true));
      navigate("/admin");
    }

    if (loginInput === superadmin.login && passwordInput === superadmin.password) {
      dispatch(toggleAdminLogin(false));
      dispatch(toggleSuperAdminLogin(true));
      navigate("/superadmin");
    }
  }


  return (
    <div className="w-full flex items-center justify-center">
      <div className="staffContent">
        <div className={`titleText`}>
          <p className={`font-bold`}>Drink&Food</p>
        </div>

          <div className="flex flex-col mb-[20px] w-full">
            <label forHTML="login" className="text-[1.2rem] text-gray-600">Введіть логін</label>
            <input onChange={(event) => setLoginInput(event.target.value)} placeholder="Логін" id="login" className="input"/>
          </div>

          <div className="flex flex-col mb-[30px] w-full">
            <label forHTML="password" className="text-[1.2rem] text-gray-600">Введіть пароль</label>
            <input onChange={(event) => setPasswordInput(event.target.value)} placeholder="Пароль" id="password" className="input border-black"/>

        </div> 
          <button onClick={userDataValid} className="btn w-[100%]">Увійти</button>

      </div>
    </div>
  );
}
