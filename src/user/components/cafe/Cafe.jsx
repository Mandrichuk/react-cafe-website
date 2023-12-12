import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./cafe.module.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import AnimatedLine from "../../../animations/AnimatedLine";
import { IoLocationSharp } from "react-icons/io5";
import { BsInstagram } from "react-icons/bs";
import images from "../../../constants/index";
import { newsData } from "../../../constants/index";
import { instagramData } from "../../../constants/index";
import TabTitle from "../../../common/TabTitle";


export default function CreateCafe() {
  const scrollImagesRef = useRef(null);

  return (
    <>
      <TabTitle title={"Drink&Food"} />
      <Header />
      <main>
        <div className={`${styles.coverContainer}`}>
          <video
            src={images.cafeFootage}
            autoPlay
            loop
            muted
            className="h-full w-full object-cover opacity-[0.3]"
          />
          <div className={`${styles.absoluteIntroduction} absolute inset-0`}>
            <div className={`${styles.introductionContainer}`}>
              <div className={`${styles.welcomeContainer}`}>
                Ласкаво просимо
              </div>
              <div className={`${styles.nameContainer}`}>Drink&Food</div>
              <Link to="/menu" className={`${styles.buttonToMenu} btn`}>
                До меню
              </Link>
            </div>
          </div>
        </div>
        
        <section className={`${styles.InfoSheet}`}>
          <AnimatedLine />

          <p className={`${styles.titleText} text-black`}>Актуальні новини</p>
          <div className={`${styles.gridInfo}`}>
            {newsData.map((image, index) => (
              <Link
                id={`${image.id}`}
                to={`/news#${image.id}`}
                className={`${styles.infoContainer} cursor-pointer`}
                key={`newsData-${index}`}
              >
                <img src={`${image.image}`} />
              </Link>
            ))}
          </div>
        </section>

        <section className={`${styles.location}`}>
          <div className={`${styles.sectionDetails} text-black`}>
            <AnimatedLine />
            <div className={`${styles.titleText}`}> Наша геолокація</div>
            <div className={`${styles.cityContainer} ${styles.articleText}`}>
              <IoLocationSharp className={`${styles.geoIcon}`} /> Запоріжжя
            </div>
            <div
              className={`${styles.locationTextContainer} ${styles.articleText}`}
            >
              Пр. Соборний 4-б
            </div>
          </div>

          <div className={`${styles.mapResponsive}`}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5356.    322301039576!2d35.        13915552683983!3d47.    83647133144654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.           1!3m3!1m2!1s0x40dc674c7cb00001%3A0xe5cbd4c1addf2d25!2z0L_RgNC-0YHQvy4g0KH Qv tCx0L7RgNC90YvQ  uSwgNN         CxLCDQl9Cw0L_QvtGA0L7QttGM0LUsINCX0LDQv9C-0YDQvtC20YHQutCw0Y8g0L7QsdC70LD  Rg dGC0YwsINCj0LrR  gNCw0L        jQvdCwLCA2OTAwMA!5e0!3m2!1sru!2ssk!4v1699205503641!5m2!1sru!2ssk"
              width="600"
              height="450"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>

        <section className={`${styles.instagramSection}`}>
          <div className={`${styles.instagramGallery} text-black`}>
            <div className={`${styles.sectionDetails}`}>
              <AnimatedLine />

              <div className={`${styles.titleText}`}> Ми в Iнстаграмі</div>
              <a
                target="_black"
                href="https://www.instagram.com/drink.food.zp/"
                className={`${styles.instagramNameContainer}`}
              >
                <BsInstagram className={`${styles.instagramIcon}`} />
                <span
                  className={`${styles.articleText}`}
                >
                  @drink.food.zp
                </span>
              </a>
            </div>
            <div className={`${styles.cover}`}>
              <div className={`${styles.scrollImages}`} ref={scrollImagesRef}>
                {instagramData.map((obj, index) => (
                  <a
                    target="_blank"
                    href={obj.link}
                    className={`${styles.child}`}
                    key={`instagram-image-${index}`}
                  >
                    <img
                      className={`${styles.childImg}`}
                      src={obj.image}
                      alt={`instagram-image-${index}`}
                    />
                    <BsInstagram
                      className={`${styles.instagramIconAbsolute}`}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.posterSection} text-white`}>
          <div className={`topWavyBox`} />
          
          <div className={`${styles.sectionsCover}`}>
            <div className={`${styles.leftSection} flex-1 flex flex-col `}>
              <div className={`titleText`}>Drink&Beer</div>
              <div className={`${styles.preTitleText}`}>Файні алкогольні напої </div>
              <div className={`${styles.articleText} ${styles.alcoholArticle} max-w-[800px]`}>
                Наш асортимент алкогольних напоїв - це вибір гурмана, де кожен
                келих - це справжній витвір мистецтва.
              </div>
              <Link
                to="/menu"
                className={`${styles.orangeBtn} font-bold btn mt-6 md:max-w-[250px]`}
              >
                Переглянути меню
              </Link>
            </div>



            <div className={`${styles.rightSection} flex-1 h-full w-full object-cover flex items-center`}>
              <img src={images.beerMug} className={`${styles.posterImg} object-cover`} />

            </div>

          </div>


          <div className={`bottomWavyBox`} />
        </section>

      </main>
      <Footer />
    </>
  );
}
