import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../../styles/pages/login.module.css";
import { useSelector, useDispatch } from "react-redux";
import { toggleAdminLogin, toggleSuperAdminLogin } from "../../../features/loggins.js";
import loginsData from "../../../data/logins/logginsData.js";




export default function CreateApp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loginInput, setLoginInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const { admin, superadmin } = loginsData.logins;
  const loggins = useSelector((state) => state.loggins.value);


  function userDataValid() {

    console.log(loginInput === superadmin.login);
    console.log(superadmin.login);
    console.log(loginInput);

    if (loginInput === admin.login && passwordInput === admin.password) {
      dispatch(toggleAdminLogin(true));
      navigate("/admin");
    }
    
    if (loginInput === superadmin.login && passwordInput === superadmin.password) {
      dispatch(toggleSuperAdminLogin(true));
      navigate("/superadmin");
      console.log("hello");
    }
  }

  return (
    <div className="text-black flex flex-col items-center justify-center h-[80vh] text-[1.3rem]">

      <div className={`${styles.nameContainer} p-[5px] text-[4rem] `}>
        <p className={`font-bold`}>Drink&Food</p>
      </div>

      <div className="flex flex-col items-center justify-center w-[100%]">
        <div className="flex flex-col mb-[20px] mr-[20px] w-[40%] max-w-[300px]">
          <label forHTML="login" className="text-[1.2rem] text-gray-600">Введіть логін</label>
          <input onChange={(event) => setLoginInput(event.target.value)} placeholder="Логін" id="login" className="border-[2px] border-l-[10px] p-[10px] pt-[5px] pb-[5px] border-black"/>
        </div>

        <div className="flex flex-col mb-[30px] mr-[20px] w-[40%] max-w-[300px]">
          <label forHTML="password" className="text-[1.2rem] text-gray-600">Введіть пароль</label>
          <input onChange={(event) => setPasswordInput(event.target.value)} placeholder="Пароль" id="password" className="border-[2px] border-l-[10px] p-[10px] pt-[5px] pb-[5px] border-black"/>
        </div>

      </div> 
        <button onClick={userDataValid} className=" bg-custom-green text-white p-[20px] pt-[10px] pb-[10px] w-[40%] max-w-[300px] mr-[20px]">Увійти</button>
    </div>
  );
}
