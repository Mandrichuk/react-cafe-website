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

export default function CreateProfile(props) {

  const [editMode, setEditMode] = useState(false);
  const [nameInput, setNameInput] = useState("Ваше ім'я");


  function handleNameChange() {
    setEditMode(nameChange => !nameChange);
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
      <Contact />
      <main className={`${styles.mainContainer} text-black w-full`}> 
        <div className={`${styles.OrdersTextContainer} w-full flex flex-row justify-center items-center titleText mt-[40px]`}>
          Ваш профіль:
        </div>
        <div className={`${styles.allInfoContainer} mt-[20px] max-w-[1100px] flex flex-col items-center`}>

          { editMode ? 

            <div className={`w-full h-full flex flex-row justify-between mb-[10px]`}> 
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

            <div className={`${styles.infoContainer} flex flex-row items-center h-full  w-full input mb-[10px] ${styles.labelTitle}`}>
              <div className=" flex-1 ml-[3%]">{nameInput}</div>
              <MdEdit onClick={handleNameChange} className={`${styles.titleText} mr-[3%] cursor-pointer text-[#05442e] `} />
            </div>
          }

          <div className={`${styles.infoContainer} flex flex-row items-center justify-between  w-full input mb-[10px] ${styles.labelTitle}`}>
            <div className="flex-1 ml-[3%]">Номер телефону</div>
          </div>
          <div className={`${styles.infoContainer} flex flex-row items-center justify-between  w-full input mb-[80px] ${styles.labelTitle}`}>
            <div className="flex-1 ml-[3%]">Бонуси</div>
          </div>

          <div className={`${styles.OrdersTextContainer} w-full flex flex-row justify-center items-center titleText mb-[20px]`}>
            Ваші замовлення:
          </div>


          {props.history.length === 0 ? 
             <div className={`${styles.bgImgContainer} mb-[0] flex flex-col items-center justify-center`}> 
              <div className="mb-[60px]  max-w-[500px] articleText">
                Упсс.. Ви поки що нічого <span className="font-bold">не замовляли</span>, для того, щоб бачити свої замовлення ви повинні бути зареєстровані та замовляти з сайту
              </div>
              <img src="/images/background/fishbone.png"/>
              <div className="w-full flex flex-row items-center justify-center mt-[50px]"> 
                <Link to="/menu" className="btn flex-1 mr-[5px]">До меню</Link>
                <Link to="/cart" className="btn flex-1 ml-[5px]">До кошику</Link>
              </div>
             </div> :
          
             props.history.map(historyItem => <History history={historyItem} />) 
          }
        </div>
      </main>
      <Footer />
    </>
  );
}