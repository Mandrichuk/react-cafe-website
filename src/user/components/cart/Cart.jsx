import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styles from "./cart.module.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Meal from "./materials/Meal";
import AnimatedLine from "../../../animations/AnimatedLine";
import getTotalPrice from "../../../utils/getTotalPrice";
import { SiInstacart } from "react-icons/si";


export default function CreateCart(props) {
  const totalPrice = getTotalPrice(props.cart);
  const [commentInput, setCommentInput] = useState("");
  const MaxSymbols = 100;

  function handleInputChange(e) {
    let inputValue = "";

    if (e.target.value !== " ") inputValue = e.target.value;

    if (inputValue.length <= MaxSymbols || inputValue === "Ваше ім'я") {
      setCommentInput(inputValue);
    }
  }

  return (
    <>
      <Header />
      <header className={`${styles.header} w-full`}>
        <div className={`${styles.headerSection} w-full`}>
          <div className={`${styles.headerTaglineContent} w-[100%] h-[150px]`}>
            <div className="flex flex-row items-center">
              <div className={`${styles.menuText}`}>Кошик</div>
              <SiInstacart className="text-[2rem] mb-[14px] ml-[10px]" />
            </div>
            <div className={`${styles.menuTaglineText}`}>
              Модифікуйте своє замовлення. Додайте, видаляйте, публійте коментар
              до вашого замовлення!
            </div>
          </div>
        </div>
      </header>
      {props.cart.length === 0 ? (
        <main
          className={`${styles.mainEmptyContainer} w-full flex-col items-center justify-center h-[60vh]`}
        >
          <div className={`${styles.emptyCartContainer}`}>
            <AnimatedLine />
            <div className={`${styles.textContainer} titleText`}>
              Кошик пустий
            </div>
            <div className="pretitleText text-gray-600">
              Зараз кошик порожній. Оберіть страви в меню для замовлення і вони
              з'являться в цьому розділі
            </div>
            <div
              className={`${styles.btnsContainer} w-full flex flex-row items-center justify-center mt-[40px]`}
            >
              <Link
                to="/"
                className={`${styles.upperBtn} font-bold btn flex-1 mr-2`}
              >
                До головної
              </Link>
              <Link to="/menu" className=" font-bold btn flex-1 mr-2">
                До меню
              </Link>
            </div>
          </div>
        </main>
      ) : (
        <>
          <main className={`w-full`}>
            <div className={`${styles.mainContainer} text-black`}>
              <div
                className={` ${styles.allMeals} w-full flex flex-col items-center justify-center mt-[100px] max-w-[700px]`}
              >
                {props.cart.map((item, index) => (
                  <Meal
                    id={item.id}
                    amount={item.amount}
                    key={`cart-item-${index}`}
                    handleAmountChange={props.handleAmountChange}
                  />
                ))}
              </div>
              <div className="flex w-full items-center justify-center">
                <div
                  className={`${styles.orderContainer} flex-1 max-w-[700px] flex flex-col text-[1.4rem] mt-[50px]`}
                >
                  <div
                    className={`${styles.orderComment} w-full flex flex-row justify-between`}
                  >
                    <label
                      htmlFor="orderComment"
                      className={`${styles} pretitileText`}
                    >
                      Коментар до замовлення
                    </label>
                    <div className={`text-[1rem] mr-3 text-gray-500`}>
                      {commentInput.length}/{MaxSymbols}
                    </div>
                  </div>
                  <input
                    value={commentInput}
                    onChange={handleInputChange}
                    name="orderComment"
                    className={`pretitileText input mb-[20px]`}
                    placeholder="Подвійна порція м'яса.."
                  />
                  <div
                    className={`${styles.lable} border-b-[1px] pretitileText border-black black p-[10px] mb-[50px]`}
                  >
                    Загальна сума замовлення: {totalPrice}грн
                  </div>

                  {props.isLoggined ? (
                    <Link
                      onClick={props.RerenderHeader}
                      to="/success"
                      className="font-bold btn flex items-center justify-center"
                    >
                      Оформити замовлення
                    </Link>
                  ) : (
                    <Link
                      onClick={props.RerenderHeader}
                      to="/order"
                      className="font-bold btn flex items-center justify-center"
                    >
                      Оформити замовлення
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </main>
        </>
      )}
      <Footer />
    </>
  );
}
