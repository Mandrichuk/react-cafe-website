import React from "react";


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

          <div className="white-circle-container white-circle-container-1">
            <img className="product-image product-image-1" src="images/decorations/hamburger.png"/>
          </div>

          <div className="white-circle-container white-circle-container-2">
            <img className="product-image product-image-2" src="images/decorations/beer-glass.png"/>
          </div>

          <div className="white-circle-container white-circle-container-3">
            <img className="product-image product-image-3" src="images/decorations/donut.png"/>
          </div>

          <div className="white-circle-container white-circle-container-4">
            <img className="product-image product-image-4" src="images/decorations/hotdog.png"/>
          </div>

          <div className="white-circle-container white-circle-container-5">
            <img className="product-image product-image-5" src="images/decorations/milkshake.png"/>
          </div>
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

            <div className="menu-container">
              <img className="dish-image" src="images/decorations/chicken.jpg" />
              <div className="menu-name-container">
                <p className="menu-text-name">Головні</p> 
                <p className="menu-text-name">страви</p>
              </div>
            </div>
            <div className="menu-container lower-menu-container">
              <img className="dish-image" src="images/decorations/cocktails.jpg" />
              <div className="menu-name-container">
                <p className="menu-text-name">Алкогольні</p> 
                <p className="menu-text-name">напої</p>
              </div>
            </div>
            <div className="menu-container">
              <img className="dish-image" src="images/decorations/puncakes.jpg" />
              <div className="menu-name-container">
                <p className="menu-text-name">Десерні</p> 
                <p className="menu-text-name">страви</p>
              </div>
            </div>
            <div className="menu-container lower-menu-container">
              <img className="dish-image" src="images/decorations/milkshake.jpg" />
              <div className="menu-name-container">
                <p className="menu-text-name">Без алкогольні</p> 
                <p className="menu-text-name">напої</p>
              </div>
            </div>
        </div>

        <div className="location-container">
          <img className="location-image" src="images/decorations/location.jpg" />

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