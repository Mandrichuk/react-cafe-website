import React, {useState} from "react";
import styles from "../../../styles/pages/menu.module.css";
import { Link } from "react-router-dom";

import { MdOutlineExposurePlus1 } from "react-icons/md";
import { MdOutlineDone } from "react-icons/md";

import { MdKeyboardArrowUp } from "react-icons/md";
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
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return ( 
    <li>
      <div className={`${styles.labelTitle} flex items-center justify-between p-[10px]  font-bold`} onClick={toggleAccordion}>
        {isOpen ?
          <MdKeyboardArrowUp
            className={`${styles.downArrow} text-black`}
          /> :
          <MdOutlineKeyboardArrowDown
            className={`${styles.downArrow} text-black`}
          /> 
        }
        {props.name} 
        <IconComponent className={`ml-[10px] text-custom-green`} /> 
      </div>
      <div
        className={`${styles.content}`}
        style={{ maxHeight: isOpen ? "1500px" : "0", padding: isOpen ? "6px" : "0" }}
      >
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
    }, 2500);
  }


  if (!products) {
    return null;
  }
  
  const productsHTML = products.map(item => {
    return (
      <div key={item.id} className={`${styles.mealContainer}  flex flex-row items-center justify-between pb-[20px] text-[1.3rem] px-[10px]`}>
        <div className={`${styles.mealNameContainer}`}>
          {item.name}
        </div>
        <div className="flex flex-row items-center">
        <div className={`${styles.priceAndGrams} flex flex-col text-[1rem] font-bold text-black`}>
          <div>100{item.grams}гм</div>
          <div>{item.price}грн </div>
        </div>
          <div onClick={() => { handleCartChange(item.id); handleBoolChange(); }} className={` ${styles.iconContainer} w-[50px] h-[50px] flex items-center rounded justify-center border-[2px] ml-[20px] cursor-pointer`}> 
            <MdOutlineExposurePlus1 className={`${styles.iconPlus} text-[1.8rem] text-black hover:text-gray-500 transition-all transition-200`}/>
          </div>
        </div>
        {
        isAdded && <div className="bottom-[50px] fixed left-0 right-0 z-30 flex items-center justify-center">
          <Link to="/cart" className="flex flex-row items-center justify-center text-[1.4rem] max-w-[400px] bg-custom-green text-white p-[20px] rounded-md">
            Додано до&nbsp;<span className="font-bold underline">кошику</span>
          </Link>
        </div>
        }
      </div>
    );
  });

  return productsHTML;
}
