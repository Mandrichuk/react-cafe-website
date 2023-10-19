import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../../../styles/shared/header.css';

import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { BsTelegram } from "react-icons/bs";
import { SiInstagram } from "react-icons/si";

import Chapter from "./materials/CreateChapter.jsx";


export default function CreateHeader(props) {
  const chapterNamesArr = [
    {link: "/", name: "Головна"}, 
    {link: "/menu", name: "Меню"},
    {link: "/login", name: props.isLoggined ? "Профіль" : "Увійти"}, 
    {link: "/cart", name: "Кошик"}
  ];
  
  let [screenSettings, setScreenSettings] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 520) {
        setScreenSettings(() => screenSettings = false)
      }
    });
  });
  
  function handleChange() {
    setScreenSettings(screenSettings => !screenSettings);
  }


  return (
    <div className="header flex flex-row items-center h-[70px] w-[100%] bg-black justify-between">
      <div className="logo-container w-[120px] ml-[30px] mr-[20px]">
        <Link to="/" className="text-white w-[100%] ">
          <img src="images/icons/drink-food-logo.png" className=" h-[25px] object-cover"/>
        </Link>
      </div>
        

      <div className="tribar hidden text-[1.5rem] mr-[35px]"
      onClick={handleChange}
      >
        {screenSettings ? <AiOutlineClose className="cursor-pointer text-white"/> : <FaBars className="cursor-pointer text-white"/>}
      </div>

      {screenSettings &&
      <div className="screen-settings">
        <div className="main-settings flex flex-col items-center w-[80%]">
          <div className="mb-[10px] mt-[10px text-[#1f4739d9] ">
            Основні
          </div>
          <div className="text-info text-[1.3rem] mt-[2px]">
            <Link to="/" className="text-black">Головна</Link> 
          </div>
          <div className="text-info text-[1.3rem] mt-[2px]">
            <Link to="/menu" className="text-black">Меню</Link> 
          </div>
          <div className="text-info text-[1.3rem] mt-[2px]">
            <Link to="/login" className="text-black">{props.isLoggined ? "Профіль" : "Увійти" }</Link> 
          </div>
          <div className="text-info text-[1.3rem] mt-[2px] mb-[15px]">
            <Link to="/cart" className="text-black">Кошик</Link>
          </div>
        </div>

        <div className="main-settings flex flex-col items-center w-[80%] justify-center">
          <div className="mb-[10px] mt-[10px] text-[#1f4739d9]">
            Соціальні мережи
          </div>
          <div className="text-info setting-text text-[1.3rem] mt-[2px] ">
            <a target="_blank" href="https://t.me/Drink_Food_zp"  className="text-info text-black">
              Telegram
            </a>
          </div>
          <div className="text-info setting-text text-[1.3rem] mt-[2px] mb-[15px] ">
            <a target="_blank" href="https://www.instagram.com/drink.food.zp/?igshid=MzRlODBiNWFlZA%3D%3D"  className="text-info text-black">
              Instagram
            </a>
          </div>
        </div>
      </div>}


      <div className="options-container mr-[30px] flex flex-row items-center">
        {chapterNamesArr.map(chapterName => <Chapter {...chapterName} {...props}/>)}
      </div>
      
      <div className="extra-options flex-row items-center mr-[20px] p-[10px] hidden">
        <a target="_blank" href="https://t.me/Drink_Food_zp" className="social-media-link text-white underline mr-[15px]">
          <BsTelegram className="text-[2rem]" />
        </a>
        <a target="_blank" href="https://www.instagram.com/drink.food.zp/?igshid=MzRlODBiNWFlZA%3D%3D" className="social-media-link text-white underline">
          <SiInstagram className="text-[2rem]" />
        </a>
      </div>
    </div>
  );
}
