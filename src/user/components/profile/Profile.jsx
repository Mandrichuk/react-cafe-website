import React, {useState, useEffect} from "react";
import styles from "../../styles/pages/profile.module.css";

import Header from "../shared/header/Header.jsx";
import Footer from "../shared/Footer.jsx";
import Contact from "../shared/contact/Contact";

import History from "./materials/History.jsx"
import { MdEdit } from "react-icons/md";
import { MdOutlineDone } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";

import { FaUser } from "react-icons/fa6";




export default function CreateProfile(props) {

  const [editMode, setEditMode] = useState(false);
  const [nameInput, setNameInput] = useState("Ваше ім'я");
  const [emailInput, setEmailInput] = useState("");


  function handleNameChange() {
    setEditMode(editMode => !editMode);
  }

  function handleInputChange(e) {
    let inputValue = "";

    if (e.target.value !== " ") inputValue = e.target.value;

    if (inputValue.length < 12 || inputValue === "Ваше ім'я") {
      setNameInput(inputValue);
    }
  }

  function isNameValid() {
    if (nameInput.length > 2) setEditMode(false);
  }

  function toInitialValue() {
    setNameInput("Ваше ім'я");
    setEditMode(false);
  }

  return (
    <>
      <Header />
      <div className={`${styles.headerSection} w-full flex flex-col items-center justify-center text-white h-[300px]`}>
        <div className={`${styles.ordersContainer} w-full`}>
          <div className={`${styles.headerTitle} titleText flex flex-row items-center mb-[15px]`}>
            <div>Профіль</div>
            <FaUser className="ml-[10px]" />
          </div>
          <div className="pretitleText">
          Тут знаходиться вся ваша персональна інформація. Можете дізнатися кількість бонусівабо переглянути свою історію замовлень.
          </div>
        
        </div>
      </div>

      <main className={`${styles.mainContainer} text-black w-full flex flex-col items-center justify-center`}> 

        <div className={`${styles.ordersContainer} w-full mt-[100px] flex flex-col items-center justify-center`}>
          <div className={`max-w-[1100px] flex flex-col w-full`}>
            <div className="animatedLine"></div>
            <div className={`${styles.OrdersTextContainer} w-full flex flex-row mb-[10px]  titleText`}>
              Ваші дані:
            </div>

            { editMode ? 

              <div className={`w-full h-full flex flex-row justify-between`}> 
                <input
                  placeholder="Введіть нове ім'я..." 
                  className={`${styles.infoContainer} rounded-r-none flex flex-row items-center h-full  w-full input mb-[10px] ${styles.labelTitle}`} 
                    type="text" 
                    value={nameInput} 
                    onChange={handleInputChange} 
                  /> 
                <div className={`${styles.iconsContainer}  flex flex-row items-center justify-between w-[30px] h-[56px] text-[2.4rem] input rounded-l-none`}> 
                  <MdOutlineDone onClick={isNameValid}  className={`${styles.icon} text-custom-green cursor-pointer`}/>
                  <RxCross1 onClick={toInitialValue}  className={`${styles.icon} text-red-800 cursor-pointer`}/>
                </div>
              </div> :

              <div className={`${styles.infoContainer} flex flex-row items-center h-full w-full input mb-[10px] ${styles.labelTitle}`}>
                <div className=" flex-1 ml-[3%]">{nameInput}</div>
                <MdEdit onClick={handleNameChange} className={`${styles.titleText} mr-[3%] cursor-pointer text-[#05442e] `} />
              </div>
            }

            <div className={`${styles.infoContainer} flex flex-row items-center justify-between  w-full input mb-[10px] ${styles.labelTitle}`}>
              <div className="flex-1 ml-[3%]">Номер телефону</div>
            </div>
            <div className={`${styles.infoContainer} flex flex-row items-center justify-between  w-full input ${styles.labelTitle}`}>
              <div className="flex-1 ml-[3%]">Бонуси</div>
            </div>
        </div>
        </div>

          <div className={`${styles.ordersContainer} mt-[100px] w-full flex flex-col items-center justify-center `}>


            {props.history.length === 0 ? 
              <div className={`${styles.bgImgContainer} mb-[0] flex flex-col items-center justify-center`}> 
                <div className="mb-[60px] max-w-[600px] articleText">
                  <div className="animatedLine"></div>
                  <div className={`${styles.OrdersTextContainer} mb-[10px]  w-full flex flex-row titleText`}>
                    Ваші замовлення:
                  </div>
                  Упсс.. Ви поки що нічого <span className="font-bold">не замовляли</span>, для того, щоб бачити свої замовлення ви повинні бути зареєстровані та замовляти з сайту
                </div>
                <img src="/images/background/fishbone.png"/>
                <div className="w-full flex flex-row items-center justify-center mt-[50px]"> 
                  <Link to="/menu" className="btn flex-1 mr-[5px] max-w-[300px]">До меню</Link>
                  <Link to="/cart" className="btn flex-1 ml-[5px] max-w-[300px]">До кошику</Link>
                </div>
              </div> :
              <div className="w-full flex flex-col justify-center max-w-[1100px]">
                <div className="animatedLine"></div>
                <div className={`${styles.OrdersTextContainer} mb-[10px]  w-full flex flex-row titleText`}>
                  Ваші замовлення:
                </div>
                
                <ul className={`${styles.accordion} w-full`}>
                  {props.history.map(historyItem => <History history={historyItem} />)} 
                </ul>
              </div>
            }
        </div>
      </main>
      <Contact />
      <Footer />
    </>
  );
}