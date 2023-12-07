import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";

import '../../../styles/shared/header.css';

import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { BsTelegram } from "react-icons/bs";
import { SiInstagram } from "react-icons/si";

import Lottie, {LottieRefCurrentProps} from "lottie-react";
import animationData from "../../../../assets/open-close.json";

import Chapter from "./materials/CreateChapter.jsx";
import ScreenChapter from "./materials/CreateScreenChapter.jsx";


export default function CreateHeader(props) {
  const closeRef = useRef(null);
  let [screenSettings, setScreenSettings] = useState(false);
  const chapterNamesArr = [
    {link: "/", name: "Головна"}, 
    {link: "/menu", name: "Меню"},
    {link: "/login", name: props.isLoggined ? "Профіль" : "Увійти"}, 
    {link: "/cart", name: "Кошик"}
  ];
  
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 800) {
        setScreenSettings(() => screenSettings = false)
      } 
    });
  });
  
  function handleChange() {
    setScreenSettings(screenSettings => !screenSettings);
  }


  return (
    <div className="header flex flex-row items-center h-[70px] w-[100%] bg-black justify-between max-w-[2300px]">
      <div className="logo-container w-[120px] ml-[30px] mr-[20px]">
        <Link to="/" className="text-white w-[100%] ">
          <img src="/images/icons/drink-food-logo.png" className=" h-[25px] object-cover"/>
        </Link>
      </div>
        

      <div className="tribar hidden text-[1.5rem] mr-[35px] cursor-pointer"
      onClick={handleChange}
      >

        <Lottie
          onClick={() => {
            if (screenSettings) {
              closeRef.current?.stop();
              closeRef.current?.setDirection(1);
              closeRef.current?.goToAndPlay(0, true);
            
            } else {
              // closeRef.current?.stop();
              closeRef.current?.setDirection(1);
              closeRef.current?.goToAndPlay(0, true);

            }
          }}
          lottieRef={closeRef}
          animationData={animationData}
          className="h-[50px] object-cover"
          loop={false}
          onComplete={() => {
            console.log('Animation completed');
          }}
        />

      </div>

      {screenSettings &&
      <div className="screen-settings">
        <div className="main-settings flex flex-col items-center w-[80%]">
          <div className="mb-[10px] mt-[10px text-[#05442e] screenSettingsTitle">
            Основні
          </div>

          {chapterNamesArr.map(chapterName => <ScreenChapter {...chapterName} {...props} handleChange={handleChange} />)}
        </div>

        <div className="main-settings flex flex-col items-center w-[80%] justify-center">
          <div className="mb-[10px] mt-[10px] text-[#05442e] screenSettingsTitle">
            Соціальні мережи
          </div>
          <div className="text-info setting-text screenSettingsText mt-[2px] ">
            <a target="_blank" href="https://t.me/Drink_Food_zp"  className="text-info text-black">
              Telegram
            </a>
          </div>
          <div className="text-info screenSettingsText mt-[2px] mb-[15px] ">
            <a target="_blank" href="https://www.instagram.com/drink.food.zp/?igshid=MzRlODBiNWFlZA%3D%3D"  className="text-info text-black">
              Instagram
            </a>
          </div>
        </div>
      </div>}


      <div className="options-container mr-[30px] flex flex-row items-center">
        {chapterNamesArr.map(chapterName => <Chapter {...chapterName} {...props} />)}
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
