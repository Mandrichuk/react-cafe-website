import React from "react";
import styles from "../../../styles/pages/menu.module.css";

import { HiOutlinePlusCircle } from "react-icons/hi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BiSolidCoffeeBean } from "react-icons/bi";
import { PiCoffeeFill, PiHamburgerFill } from "react-icons/pi";
import { FaCocktail } from "react-icons/fa";
import { TbBrandCakephp } from "react-icons/tb";
import { LuSandwich } from "react-icons/lu";
import { LiaHotdogSolid } from "react-icons/lia";

const iconMap = {
  BiSolidCoffeeBean,
  PiCoffeeFill,
  PiHamburgerFill,
  FaCocktail,
  TbBrandCakephp,
  LuSandwich,
  LiaHotdogSolid,
};



export default function CreateMenuItem(props) {
  const IconComponent = iconMap[props.icon];

  return ( 
    <li>
      <input type="radio" name="accordion" id={props.id}/>
      <label htmlFor={props.id} className={`flex items-center justify-between`}>
        <MdOutlineKeyboardArrowDown className={`${styles.downArrow} text-black text-[2rem]`}/>
        {props.name} 
        <IconComponent className={`text-[1.8rem] ml-[10px] text-custom-green`}/> 
      </label>

      <div className={`${styles.content}`}>
        {CreateProducts(props.products, props.cart, props.handleCartChange)}
      </div>
    </li>
  );
}



function CreateProducts(products, cart, handleCartChange) {
  
  if (!products) {
    return null;
  }
  
  const productsHTML = products.map(item => {
    console.log(item.id);
    return (
      <div key={item.id} className={`flex flex-row items-center justify-between pb-[20px] text-[1.3rem] pr-[10px] pl-[10px]`}>
        {item.name}
      <div className="flex flex-row items-center">
      <div className={`${styles.priceAndGrams} flex flex-col text-[1rem] font-bold text-black`}>
        <div>{item.grams}гм</div>
        <div>{item.price}грн </div>
      </div>
        <div>
          <HiOutlinePlusCircle className="text-[2.3rem] text-black cursor-pointer hover:text-gray-500 transition-all transition-200 ml-[15px]" onClick={() => handleCartChange(item.id)}/>
        </div>
      </div>
      </div>
    );
  });

  return productsHTML;
}
