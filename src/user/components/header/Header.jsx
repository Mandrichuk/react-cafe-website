import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import "./header.css";
import { BsTelegram } from "react-icons/bs";
import { SiInstagram } from "react-icons/si";
import Lottie from "lottie-react";
import images from "../../../constants/index";
import Chapter from "./materials/CreateChapter";
import ScreenChapter from "./materials/CreateScreenChapter";
import { useSelector } from "react-redux";


export default function CreateHeader(props) {
  const openClose = images.openClose;
  const closeRef = useRef(null);
  let [screenSettings, setScreenSettings] = useState(false);

  const userLogin = useSelector((state) => state.loggins.value.userLoggined);
  console.log(userLogin);
  const isUserLogginedNav = userLogin ? { link: "/profile", name: "Профіль"}  : { link: "/login", name: "Увійти" };
  const navInfo = [
    { link: "/", name: "Головна" },
    { link: "/menu", name: "Меню" },
    isUserLogginedNav,
    { link: "/cart", name: "Кошик" },
  ];

  function handleChange() {
    setScreenSettings(!screenSettings);
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 800) {
        setScreenSettings(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    closeRef.current?.setDirection(-1);
    closeRef.current?.goToAndPlay(55, true);
  }, []);

  return (
    <div className="header flex flex-row items-center h-[70px] w-[100%] bg-black justify-between max-w-[2300px]">
      <div className="logo-container w-[120px] ml-[30px] mr-[20px]">
        <Link to="/" className="text-white w-[100%] ">
          <img src={images.textLogo} className=" h-[25px] object-cover" />
        </Link>
      </div>

      <div
        className="tribar hidden text-[1.5rem] mr-[35px] cursor-pointer"
        onClick={handleChange}
      >
        <Lottie
          onClick={() => {
            if (!screenSettings) {
              closeRef.current?.stop();
              closeRef.current?.setDirection(1);
              closeRef.current?.goToAndPlay(25, true);
            } else {
              closeRef.current?.setDirection(-1);
              closeRef.current?.goToAndPlay(55, true);
            }
          }}
          lottieRef={closeRef}
          animationData={openClose}
          className="h-[50px] object-cover"
          loop={false}
          autoplay={false}
        />
      </div>

      {screenSettings && (
        <div className="screen-settings">
          <div className="main-settings flex flex-col items-center w-[80%]">
            <div className="mb-[10px] mt-[10px text-[#05442e] screenSettingsTitle">
              Основні
            </div>

            {navInfo.map((obj, index) => (
              <ScreenChapter
                {...obj}
                {...props}
                handleChange={handleChange}
                key={`screen-${index}`}
              />
            ))}
          </div>

          <div className="main-settings flex flex-col items-center w-[80%] justify-center">
            <div className="mb-[10px] mt-[10px] text-[#05442e] screenSettingsTitle">
              Соціальні мережи
            </div>

            <div className="text-info screenSettingsText mt-[2px]">
              <span className="text-info text-black">
                <a
                  target="_blank"
                  href="https://t.me/Drink_Food_zp"
                >
                  Telegram
                </a>
              </span>
            </div>

            <div className="text-info screenSettingsText mt-[2px]">
              <span className="text-info text-black">
                <a
                  target="_blank"
                  href="https://www.instagram.com/drink.food.zp/?igshid=MzRlODBiNWFlZA%3D%3D"
                >
                  Instagram
                </a>
              </span>
            </div>

          </div>
        </div>
      )}

      <div className="options-container mr-[30px] flex flex-row items-center">
        {navInfo.map((obj, index) => (
          <Chapter key={`header-name-${index}`} {...obj} {...props} />
        ))}
      </div>

      <div className="extra-options flex-row items-center mr-[20px] p-[10px] hidden">
        <a
          target="_blank"
          href="https://t.me/Drink_Food_zp"
          className="social-media-link text-white underline mr-[15px]"
        >
          <BsTelegram className="text-[2rem]" />
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/drink.food.zp/?igshid=MzRlODBiNWFlZA%3D%3D"
          className="social-media-link text-white underline"
        >
          <SiInstagram className="text-[2rem]" />
        </a>
      </div>
    </div>
  );
}
