import React, {useRef} from "react";
import { Link } from "react-router-dom";
import {motion} from "framer-motion";
import styles from "../../styles/pages/cafe.module.css";



import Header from "../shared/header/Header.jsx";
import Footer from "../shared/Footer.jsx";
import Contact from "../shared/contact/Contact";

import { IoLocationSharp } from "react-icons/io5";
import { BsInstagram } from "react-icons/bs";

import bgVideo from "../../../assets/cafe_video.mp4";
import newsData from "../../../data/newsData";

export default function CreateCafe() {
  const scrollImagesRef = useRef(null);

  const newsImages = ["5percent.jpg", "withkids.jpg", "bestcoffee.jpg"]

  const instagramImages = ["instagram-image.jpg", "instagram-image.jpg", "instagram-image.jpg", "instagram-image.jpg", "instagram-image.jpg", "instagram-image.jpg"];

  const scroll = (action) => {
    if (scrollImagesRef.current && action === "right") {
      scrollImagesRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
    else scrollImagesRef.current.scrollBy({ left: -200, behavior: 'smooth' });
  };


  return (
    <>
      <Header />

      <main>

        <div className={`${styles.coverContainer}`}>
          <video src={bgVideo} autoPlay loop muted className="h-full w-full object-cover opacity-[0.3]" />
          <div className={`${styles.absoluteIntroduction} absolute inset-0`}>
            <div className={`${styles.introductionContainer}`}>
              <div className={`${styles.welcomeContainer}`}>Ласкаво просимо</div>
              <div className={`${styles.nameContainer}`}>Drink&Food</div>
              <Link to="/menu" className={`${styles.buttonToMenu} btn`}>До меню</Link>
            </div>
          </div>
        </div>


        <section className={`${styles.InfoSheet}`}>
          <div className={`${styles.animatedLine} animatedLine`}></div>
          <p className={`${styles.titleText} text-black`}>Актуальні новини</p>
          <div className={`${styles.gridInfo}`}>
          {
          newsData.map(newsImage => (
            <Link id={`#${newsImage.id}`} to="/news" className={`${styles.infoContainer} cursor-pointer`}>
              <img src={`images/background/${newsImage.image}`}/>
            </Link>
          ))
          }
          </div>
        </section>


        <section className={`${styles.location}`}>
          <div className={`${styles.sectionDetails} text-black`}>
            <div className={`${styles.animatedLine} animatedLine`}></div>
            <div className={`${styles.titleText}`}> Наша геолокація</div>
            <div className={`${styles.cityContainer} ${styles.articleText}`}><IoLocationSharp className={`${styles.geoIcon}`}/> Запоріжжя</div>
            <div className={`${styles.locationTextContainer} ${styles.articleText}`}>Пр. Соборний 4-б</div>
          </div>


          <div className={`${styles.mapResponsive}`}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5356.    322301039576!2d35.        13915552683983!3d47.    83647133144654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.           1!3m3!1m2!1s0x40dc674c7cb00001%3A0xe5cbd4c1addf2d25!2z0L_RgNC-0YHQvy4g0KH Qv tCx0L7RgNC90YvQ  uSwgNN         CxLCDQl9Cw0L_QvtGA0L7QttGM0LUsINCX0LDQv9C-0YDQvtC20YHQutCw0Y8g0L7QsdC70LD  Rg dGC0YwsINCj0LrR  gNCw0L        jQvdCwLCA2OTAwMA!5e0!3m2!1sru!2ssk!4v1699205503641!5m2!1sru!2ssk" 
              width="600" 
              height="450"     
              allowfullscreen="" 
              loading="lazy"      
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>

        </section>


        <section className={`${styles.instagramSection}`}>
          <div className={`${styles.instagramGallery} text-black`}>
          <div className={`${styles.sectionDetails}`}>
            <div className={`${styles.animatedLine} animatedLine`}></div>
            <div className={`${styles.titleText}`}> Ми в Iнстаграмі</div>
            <a target="_black" href="https://www.instagram.com/drink.food.zp/" className={`${styles.instagramNameContainer}`}>
              <BsInstagram className={`${styles.instagramIcon}`}/>
              <a href="https://www.instagram.com/drink.food.zp/" className={`${styles.articleText}`}> @drink.food.zp</a>
            </a>
          </div>
            <div className={`${styles.cover}`}>
              <div className={`${styles.scrollImages}`} ref={scrollImagesRef}>
                {instagramImages.map((image, index) => (
                  <a target="_blank" href="https://www.instagram.com/drink.food.zp/" className={`${styles.child}`} key={`image-${index}`}>
                    <img className={`${styles.childImg}`} src={`images/instagram/${image}`} alt={`image-${index}`} />
                    <BsInstagram className={`${styles.instagramIconAbsolute}`}/>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>


         <section className={`${styles.drinkAndBeerSection} text-white`}>
          <section className={`${styles.beerMainSection}`}>
            <div className={`${styles.sectionDetails}`}>
              <div className={`${styles.titleText} ${styles.beerTitle}`}>Drink&Beer</div>
              <div className={`${styles.preTitleText}`}>Файні алкогольні напої</div>
              <div className={`${styles.articleText} ${styles.alcoholArticle}`}>
                Наш асортимент алкогольних напоїв - це вибір гурмана, де кожен келих - це справжній витвір мистецтва.
              </div>
              <Link to="/menu" className={`${styles.bgWhite} font-bold btn mt-6 max-w-[220px] md:max-w-[250px]`}>Переглянути меню</Link>
            </div>

            <div className={`${styles.beerImageContainer}`}>
              <img className={`${styles.beerImage}`} src="images/decorations/beer-mug.png" />
            </div>
          </section>
        </section>        

      </main>
      <Footer />
    </>
  );
}