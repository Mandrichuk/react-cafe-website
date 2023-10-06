import React from "react";
import styles from "../../../styles/pages/menu.module.css";


export default function CreateMenuItem(props) {
  return ( 
    <li>
      <input type="radio" name="accordion" id={props.id}/>
      <label for={props.id}>{props.name}</label>
      <div className={`${styles.content}`}>

      </div>
    </li>
  );
}