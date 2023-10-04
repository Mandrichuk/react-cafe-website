import React from "react";
import { Link } from "react-router-dom";

export default function CreateInfoBar() {

  return (
    <div className="nav-container">
      <div className="nav__logo-container">
        <Link to="/" className="text-black"><img className="nav__logo-image" src="images/icons/brand-logo.png"/></Link>
      </div>

      <div className="links-buttons-container">


        <div className="nav__general-links">

          <a href="#" className="nav__link nav__link-home">
            <div className="nav__link-container">
              <Link to="/" className="text-black">Головна</Link>
            </div>
          </a>
          <a href="#" className="nav__link nav__link-about">
            <div className="nav__link-container">
              <Link to="/about" className="text-black">Про нас</Link>
            </div>
          </a>
          <a href="#" className="nav__link nav__link-menu">
            <div className="nav__link-container">
              <Link to="/menu" className="text-black">Меню</Link>
            </div>
          </a>
          <a href="#" className="nav__link nav__link-location">
            <div className="nav__link-container">
              <Link to="/menu" className="text-black">Локація</Link>
            </div>
          </a>
          <a href="#" className="nav__link nav__link-contacts">
            <div className="nav__link-container">
            <Link to="/contacts" className="text-black">Контакти</Link>
            </div>
          </a>

        </div>

        <div className="sosial-buttons-container"> 
          <a target="_blank" href="https://t.me/Drink_Food_zp">
            <button className="telegram-btn">
                Telegram
            </button>
          </a>
          <a target="_blank" href="https://www.instagram.com/drink.food.zp/?igshid=MzRlODBiNWFlZA%3D%3D">
            <button className="instagram-btn">Instagram</button>
          </a>
        </div>

      </div>

    </div>
  );
}