import React, { useState, useEffect } from "react";
import styles from "../menuSettings.module.css";
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
import { MdKeyboardArrowUp } from "react-icons/md";

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
      <div
        className={`${styles.labelTitle} flex items-center justify-between p-[10px]  font-bold`}
        onClick={toggleAccordion}
      >
        {isOpen ? (
          <MdKeyboardArrowUp className={`${styles.downArrow} text-black`} />
        ) : (
          <MdOutlineKeyboardArrowDown
            className={`${styles.downArrow} text-black`}
          />
        )}
        {props.name}
        <IconComponent className={`ml-[10px] text-custom-green`} />
      </div>
      <div
        className={`${styles.content}`}
        style={{
          maxHeight: isOpen ? "1500px" : "0",
          padding: isOpen ? "6px" : "0",
        }}
      >
        {CreateProducts(props.products, props.cart)}
      </div>
    </li>
  );
}

function CreateProducts(products, cart) {
  if (!products) {
    return null;
  }

  const productsHTML = products.map((item) => {
    return (
      <div
        key={item.id}
        className={`${styles.mealContainer}  flex flex-row items-center justify-between pb-[20px] text-[1.3rem] px-[10px]`}
      >
        <div className={`${styles.mealNameContainer}`}>{item.name}</div>
        <div className="flex flex-row items-center">
          <div
            className={`${styles.priceAndGrams} flex flex-col text-[1rem] font-bold text-black`}
          >
            <div>100{item.grams}гм</div>
            <div>{item.price}грн </div>
          </div>

          <Link
            to={`/superadmin/menu/edit/meal/${item.id}`}
            className={` ${styles.iconContainer} w-[50px] h-[50px] flex items-center rounded-md justify-center border-[2px] ml-[20px] cursor-pointer`}
          >
            <BiSolidEdit
              className={`${styles.iconPlus} text-[1.8rem] text-black hover:text-gray-500 transition-all transition-200`}
            />
          </Link>
        </div>
      </div>
    );
  });

  return productsHTML;
}
