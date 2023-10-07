import React from "react";
import styles from "../../../styles/pages/menu.module.css";
import { HiOutlinePlusCircle } from "react-icons/hi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function CreateMenuItem(props) {

  return ( 
    <li>
      <input type="radio" name="accordion" id={props.id}/>
      <label for={props.id} className={``}><MdOutlineKeyboardArrowDown className={`${styles.downArrow} text-black text-[2rem] mr-[5px]`}/>{props.name}</label>
      <div className={`${styles.content}`}>
        {CreateProducts(props.products)}
      </div>
    </li>
  );
}

function CreateProducts(products) {
  if (!products) {
    return null;
  }

  const productsHTML = products.map(item => {
    return (
      <div key={item.id} className={`flex flex-row items-center justify-between pb-[20px] text-[1.3rem] pr-[10px] pl-[10px]`}>
        {item.name}
        <div>
          <HiOutlinePlusCircle className="text-[2rem] text-black cursor-pointer hover:text-gray-500 transition-all transition-200" />
        </div>
      </div>
      
    );
  });

  return productsHTML;
}
