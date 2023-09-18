import React from "react";

import circlesData from "../../data/cafe/circlesData.js";
import Circle from "./materials/CreateCircles.js";


import menuData from "../../data/cafe/menuData.js";
import Menu from "./materials/CreateMenu.js";



const circlesHTML = (
  circlesData.map(circleData => {
    return <Circle
      key={circleData.id} 
      {...circleData}
    />
  })
);


const menuHTML = (
  menuData.map(positionData => {
    return <Menu 
      key={positionData.id}
      {...positionData}
    />
  })
);

export default function CreateMain() {
  const main = (
    <main>
      <div className="main-first-section">
        <div className="about-container">
          <div className="mission-container">Наша історія</div>

            <div className="mission-article-container">
              <div className="left-section-container">
                Ласкаво просимо до нашого ресторану "Drink&Food" – місця, де    справжній гурман завжди знайде щось за смаком!

                Наш заклад – це ідеальне поєднання кафе, де можна насолодитися    ароматним кавою і свіжозавареними еспресо, і пивного бару з   величезним   вибором місцевих та імпортних сортів пива. Ми гордо  представляємо   найкращі сорти крафтового пива та традиційних видів,   щоб задовольнити   смак кожного нашого гостя.
              </div>
              <div className="right-section-container">
                Ми пропонуємо затишну атмосферу та вишуканий сервіс, щоб ви могли насолодитися  часом, проведеним в "Drink&Food". Чи це сніданок з ароматною кавою, чи вечірка   з друзями за пивом та бургерами – ми завжди готові зустріти вас з посмішкою і   догодити вашим смакам.
              </div>
            </div>
        </div>

        <div className="meal-image-container">
          <img className="meal-image" src="images/background/hotdogs.jpg"/>
        </div>

        <div className="separation-container">
          <img className="separation-image" src="images/background/plates-on-table.jpg"/>
        </div>

        <div className="circules-container">
          {circlesHTML}
        </div>
      </div>

      <div className="main-second-section">

        <div className="info-separation-container">
        
        </div>

        <div className="menu-info-container">
          <div className="view-text-container">
            Перегляньте наше меню
          </div>

        <div className="all-menu-container">
          {menuHTML}
        </div>

        <div className="location-container">
          <a className="maps-link" href="link-to-location">
            <img className="location-image" src="images/decorations/location.jpg" />
          </a>

          <div className="cutaway-holder-container">

            <div className="cutaway-container">
              <div className="cutaway-info-container">

                <div className="name-container">
                  Drink&Food
                </div>
                <div className="tagline-container">
                  Де люди приходять поїсти
                </div>

                <div className="contacts-location-container">
                  <div className="location-text-container">
                    Пр. Соборний 4-б
                  </div>
                  <div className="contacts-container">
                    Номер
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="third-section-container">
          <div className="nav-container">
            <div className="nav__logo-container">separation-container
              <img className="nav__logo-image" src="images/icons/brand-logo.png"/>
            </div>

            <div className="links-buttons-container">


              <div className="nav__general-links">

                <a href="#" className="nav__link nav__link-home">
                  <div className="nav__link-container">
                    Головна
                  </div>
                </a>
                <a href="#" className="nav__link nav__link-about">
                  <div className="nav__link-container">
                    Про нас
                  </div>
                </a>
                <a href="#" className="nav__link nav__link-menu">
                  <div className="nav__link-container">
                    Меню
                  </div>
                </a>
                <a href="#" className="nav__link nav__link-location">
                  <div className="nav__link-container">
                    Локація
                  </div>
                </a>
                <a href="#" className="nav__link nav__link-contacts">
                  <div className="nav__link-container">
                    Контакти
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
        </div>

      </div>
      </div>

    </main>
  );

  return main;
}