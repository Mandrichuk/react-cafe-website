import React from "react";
import styles from "../../../styles/pages/menu.module.css";


export default function CreateMenuItem(props) {
  return ( 
    <div className={`${styles.menuItem} flex flex-col justify-top items-center cursor-pointer duration-300 transition-all ease-in-out`}> 
      <img className={`${styles.menuItemImg} w-[70%] h-[60%] object-contain`} src={`images/menu/${props.image}`} />
      <div className={`${styles.menuItemText} mt-[15%] flex flex-col items-center w-[100%] justify-center text-black text-[1.5rem] font-bold`}>
        {props.name}
      </div>
    </div>
  );
}