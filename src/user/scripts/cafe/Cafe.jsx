import React, {useRef} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from "../../styles/pages/cafe.module.css";

import Header from "../shared/header/Header.jsx";
import Footer from "../shared/Footer.jsx";

import { IoLocationSharp } from "react-icons/io5";
import { BsArrowLeftShort, BsArrowRightShort, BsInstagram } from "react-icons/bs";


export default function CreateCafe() {
  const scrollImagesRef = useRef(null);

  const images = ["instagram-image.jpg", "instagram-image.jpg", "instagram-image.jpg", "instagram-image.jpg", "instagram-image.jpg", "instagram-image.jpg"];

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
          <div className={`${styles.introductionContainer}`}>
            <div className={`${styles.welcomeContainer}`}>Ласкаво просимо</div>
            <div className={`${styles.nameContainer}`}>Drink&Food</div>
          </div>
        </div>


        <section className={`${styles.InfoSheet}`}>
          <div className={`${styles.animatedLine} animatedLine`}></div>
          <p className={`${styles.currentNewsText}`}>Актуальні новинки</p>
          <div className={`${styles.gridInfo}`}>

            <div className={`${styles.infoContainer}`}>
              <img src="images/background/hotdogs.jpg"/>
              <p>new</p>
            </div>
            <div className={`${styles.infoContainer}`}>
              <img src="images/background/hotdogs.jpg"/>
              <p>new</p>
            </div>
            <div className={`${styles.infoContainer}`}>
              <img src="images/background/hotdogs.jpg"/>
              <p>new</p>
            </div>

          </div>
        </section>

        <section className={`${styles.location}`}>
          <div className={`${styles.locationDetails} text-black`}>
            <div className={`${styles.animatedLine} animatedLine`}></div>
            <div className={`${styles.titleText}`}> Наша геолокація</div>
            <div className={`${styles.cityContainer}`}><IoLocationSharp className={`${styles.geoIcon}`}/> Запоріжжя</div>
            <div className={`${styles.locationTextContainer}`}>Пр. Соборний 4-б</div>
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
          <div className={`${styles.buttonRightContainer}`}>
            <button className={`${styles.icon}`} onClick={() => scroll("left")}>
              <BsArrowLeftShort />
            </button>
          </div>
          <div className={`${styles.cover}`}>
            <div className={`${styles.scrollImages}`} ref={scrollImagesRef}>
              {images.map((image, index) => (
                <a target="_blank" href="https://www.instagram.com/drink.food.zp/" className={`${styles.child}`} key={`image-${index}`}>
                  <img className={`${styles.childImg}`} src={`images/instagram/${image}`} alt={`image-${index}`} />
                  <BsInstagram className={`${styles.instagramIconAbsolute}`}/>
                </a>
              ))}
            </div>
          </div>
          <div className={`${styles.buttonLeftContainer}`}>
            <button className={`${styles.icon}`} onClick={() => scroll("right")}>
              <BsArrowRightShort />
            </button>
          </div>
        <div className={`${styles.instagramDetails}`}>
          <div className={`${styles.animatedLine} animatedLine`}></div>
          <div className={`${styles.titleText}`}> Ми в Iнстаграмі</div>
          <a target="_black" href="https://www.instagram.com/drink.food.zp/" className={`${styles.instagramNameContainer}`}>
            <BsInstagram className={`${styles.instagramIcon}`}/>
            <a href="https://www.instagram.com/drink.food.zp/" className={`$  {styles.instagramName}`}> @drink.food.zp</a>
          </a>
        </div>
        </div>

        </section>



        {/* <div className={`${styles.schedule} text-black`}>
          <div className={`${styles.sevenDaysText}`}>Працюемо 7 днів в неділю!</div>
          <div className={`${styles.weekdaysSchedule}`}>9:00–20:00</div>
        </div> */}

      </main>


      <Footer />
    </>
  );
}
