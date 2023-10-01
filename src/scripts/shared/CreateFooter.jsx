import React from "react";
import styles from "../../styles/pages/menu.module.css";


export default function CreateFooter() {
  return (
    <footer className={`${styles.footer} mt-[100px] relative w-[100%] h-[300px]`}>
      <div className="m-[4%] mt-[50px]">
        <div className={`${styles.logoContainer} w-[100%] h-[100px] mb-[30px]`}>
          <img className={`${styles.logoImg} w-[100px] object-cover`} src="images/icons/brand-logo.png"/>
        </div>
        <div className={`${styles.allInfoContainer} w-[100%]`}>
          <div className="flex flex-row items-top h-[150px]">

            <div className={`${styles.aboutContainer} w-[200px] mr-[30px]`}>
                <p className={`${styles.titleText} font-bold text-[1.5rem] mb-[15px]`}>
                  Про нас
                </p>

                <p className={`${styles.mainText} text-[1rem] mb-[5px]`}>
                  Пр. Соборний 4-б
                </p>

                <p className={`${styles.mainText} text-[1rem] mb-[5px]`}>
                  Номер
                </p>

            </div>

            <div className={`${styles.aboutContainer} w-[300px]`}>
                <p className={`${styles.titleText} font-bold text-[1.5rem] mb-[15px]`}>
                  Наші соціальні мережі
                </p>

                <p className={`${styles.mainText} text-[1rem] mb-[5px]`}>
                  Пр. Соборний 4-б
                </p>

                <p className={`${styles.mainText} text-[1rem] mb-[5px]`}>
                  Номер
                </p>

            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}