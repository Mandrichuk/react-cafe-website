import React, {useState} from "react";
import styles from "../../../styles/pages/menu.module.css";
import { Link } from "react-router-dom";

import { BiSolidEdit } from "react-icons/bi";
import { MdOutlineDone } from "react-icons/md";

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
    <li className="w-full text-black">
      <input type="radio" name="accordion" id={props.id}/>
      <label htmlFor={props.id} className={`flex items-center justify-between`}>
        <MdOutlineKeyboardArrowDown className={`${styles.downArrow} text-black text-[2rem]`}/>
        <div className="text-[2rem] font-bold">{props.name} </div>
        <IconComponent className={`text-[2rem] ml-[10px] text-custom-green`}/> 
      </label>

      <div className={`${styles.content}`}>
        {CreateProducts(props.products, props.cart, props.handleCartChange)}
      </div>
    </li>
  );
}



function CreateProducts(products, cart, handleCartChange) {
  
  const [isAdded, setIsAdded] = useState(false);

  function handleBoolChange() {
    setIsAdded(true);
  
    setTimeout(() => {
      setIsAdded(false);
    }, 1200);
  }


  if (!products) {
    return null;
  }
  
  const productsHTML = products.map(item => {
    return (
      <div key={item.id} className={`flex flex-row items-center justify-between pb-[20px] pretitleText pr-[10px] pl-[10px]`}>
        {item.name}
        <div className="flex flex-row items-center">
        <div className={`${styles.priceAndGrams} flex flex-col text-[1rem] font-bold text-black`}>
          <div>{item.grams}гм</div>
          <div>{item.price}грн </div>
        </div>
        <Link to={`/superadmin/menu/edit/meal/${item.id}`}>
          <div className="w-[45px] h-[45px] flex items-center justify-center ml-[20px] cursor-pointer"> 
            <BiSolidEdit className="text-[1.8rem] text-black h-[80%] hover:text-gray-500 transition-all transition-200"/>
          </div>
        </Link>

        </div>
        {isAdded && <div className="bottom-[50px] fixed left-0 right-0 z-30 flex items-center justify-center">
          <div className="flex flex-row items-center justify-center text-[1.4rem] bg-custom-green text-white p-[10px] pb-[20px] pt-[20px]">
            <MdOutlineDone className={`${styles.doneIcon} mr-[10px] text-[2rem]`}/>Додано до кошику

          </div>
        </div>}
      </div>
    );
  });

  return productsHTML;
}
