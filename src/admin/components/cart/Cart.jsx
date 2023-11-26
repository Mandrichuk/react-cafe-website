import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/pages/cart.module.css";

import Header from "../shared/Header";
import { useSelector } from "react-redux";

import Meal from "./materials/Meal";
import getTotalPrice from "../../../user/components/shared/getTotalPrice";
import menuData from "../../../data/menu/menuData";

import { SiInstacart } from "react-icons/si";

export default function CreateCart() {
  const adminCart = useSelector((state) => state.carts.value.adminCart);
  const adminLogin = useSelector((state) => state.loggins.value.adminLoggined);

  const totalPrice = getTotalPrice(adminCart);

  return (
    <>
      <Header />
    { totalPrice.length === 0 ?
    <main className={`${styles.mainEmptyContainer}`}>
      <div className={`${styles.emptyCartContainer}`}>
        <div className={`${styles.textContainer}`}>
          Кошик пустий, оберіть щось в&nbsp;<Link to="/menu"
          className={styles.link}>меню</Link>
        </div>
      </div>
    </main> :

    <main className={`w-full`}>
      <div className={`${styles.mainContainer} text-black`}>
      
      <div className={` ${styles.allMeals} w-[100%] flex flex-col items-center justify-center mt-[50px] max-w-[800px] min-w-[450px]`}>
        {
          adminCart.map(item => (<Meal id={item.id} amount={item.amount} />))
        }
      </div>


      <div className={`${styles.orderContainer} flex flex-col text-[1.4rem] mt-[100px] mb-[100px]`}>
        <label htmlFor="orderComment" className={`${styles} text-[1.2rem]`}>Коментар до замовлення</label>
        <input name="orderComment" className={`input mb-[20px]`} placeholder="Подвійна порція м'яса.."/>
        <div className={`${styles.totalCost} border-b-[1px] border-black black p-[10px] mb-[80px]`}>
          Загальна сума замовлення: {totalPrice}грн
        </div>

        <Link to="/admin/menu" className="btn mb-3">
          До меню
        </Link>
        {adminLogin ? 
        <Link 
        // onClick={props.RerenderHeader} 
        to="/admin/orders" className="btn flex items-center justify-center">
            Оформити замовлення
        </Link> :
        <Link 
        // onClick={props.RerenderHeader} 
        to="/admin/login/user" className="btn flex items-center justify-center">
          Оформити замовлення
      </Link>} 

      </div>
      </div>
    </main>
    }
    </>
  );
}
