import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from '../../../styles/shared/header.module.css';


export default function CreateHeader(props) {

  const url = props.currentLink;
  const path = `/${url.split("/").slice(3).join("/")}`;

  return (
    <div className={`${styles.header} fixed top-[0] flex flex-row items-center h-[70px] w-[100%] bg-black justify-between text-white`}>
      <div className="w-[120px] ml-[30px] mr-[20px] text-[1.3rem] font-bold">Drink&Food</div>
      <div className="mr-[40px]"> ~ {path}</div>
    </div>
  ); 
}
