import React from 'react';
import styles from "../../styles/pages/menuSuccess.module.css";
import { Link } from 'react-router-dom';

export default function MenuSuccess() {
  return (
    <div className={`${styles.mainContainer} flex flex-col items-center justify-center h-[70vh]`}>
      <div className={`${styles.textContainer} text-[1.8rem]`}>

      <div>Страва оновлена успішно! </div>
      <div>Переглянути оновлене <Link to="/superadmin/menu" className={`${styles.Links} text-blue-700`}>"Меню"</Link></div>
      <div>Повернутися до <Link to="/superadmin" className={`${styles.Links} text-blue-700`}>"Головної"</Link> </div>
      </div>
    </div>
  )
}
