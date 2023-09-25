import React from "react";


export default function CreateHeader() {
  const header = (
    <header>

      <nav className="header__nav">
        <div className="logo-container">
          <img className="logo-img" src="images/icons/drink-food-logo.png"/>
        </div>
        <div className="general-info-container">
          <div className="contact-phone-container info-container">
            Номер
          </div>
          <div className="contact-phone-container info-container">
            Пр. Соборний 4-б
          </div>
          <div className="contact-phone-container info-container">
            Меню
          </div>
        </div>
      </nav>

      <div className="introduction-container">
        <div className="welcome-container">Ласкаво просимо</div>
        <div className="name-container">Drink&Food</div>
        <div className="tagline-container">Смачні страви та напої</div>
      </div>

    </header>
  );

  return header;
}