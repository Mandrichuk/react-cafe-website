import React, { useState } from 'react';
import styles from '../../styles/pages/mealEdit.module.css';
import mealById from '../../../user/scripts/shared/getMeal';

import { TbCategoryFilled, TbStatusChange } from "react-icons/tb";
import { GiHotMeal, GiPriceTag } from "react-icons/gi";
import { RiScales2Line } from "react-icons/ri";
import { IoWaterOutline } from "react-icons/io5";
import { AiOutlineDelete } from "react-icons/ai";
import { BiUpload } from "react-icons/bi";

export default function CreateMealEdit() {
  const currentPath = window.location.pathname;
  const pathSegments = currentPath.split('/');
  const lastSegment = Number(pathSegments[pathSegments.length - 1]);
  let currentMeal = mealById(lastSegment);

  const [editMode, setEditMode] = useState(false);


  function handleModeChange() {
    setEditMode(editMode => !editMode);
  }

  return (
    <div className={`${styles.mainContainer} flex flex-col items-center justify-between w-[100%] mt-[120px]`}>

      <div className={`${styles.categoryContainer}`}>
        <div className={`${styles.specificationContainer}`}>
          <TbCategoryFilled className="text-custom-green mr-[10px]"/> Категорія
        </div>
        <div className={`${styles.currentMealContainer}`}>Категорія</div>
      </div>

      <div className={`${styles.categoryContainer}`}>
        <div className={`${styles.specificationContainer}`}>
          <GiHotMeal className="text-custom-green mr-[10px]"/>
          Назва
        </div>
        <div className={`${styles.currentMealContainer}`}>{currentMeal.name}</div>
      </div>

      <div className={`${styles.categoryContainer}`}>
        <div className={`${styles.specificationContainer}`}>
          <RiScales2Line className="text-custom-green mr-[10px]"/>
          Об'єм
        </div>
        <div className={`${styles.currentMealContainer}`}>{currentMeal.grams}</div>
      </div>

      <div className={`${styles.categoryContainer}`}>
        <div className={`${styles.specificationContainer}`}>
          <IoWaterOutline className="text-custom-green mr-[10px]"/>
          Одиниці виміру
        </div>
        <div className={`${styles.currentMealContainer}`}>Одиниці виміру</div>
      </div>

      <div className={`${styles.categoryContainer}`}>
        <div className={`${styles.specificationContainer}`}>
          <GiPriceTag className="text-custom-green mr-[10px]"/>
          Ціна
        </div>
        <div className={`${styles.currentMealContainer}`}>{currentMeal.price}</div>
      </div>

      {!editMode &&
        <div className={`${styles.btnsContainer} flex flex-row items-center justify-center`}>
            <button className={`${styles.btnActions} ${styles.changeBtn} flex flex-row items-center`}>
              <TbStatusChange />
              Змінити
            </button>
        
            <button className={`${styles.btnActions} ${styles.deleteBtn} flex flex-row items-center`}>
              <AiOutlineDelete />
              Видалити
            </button>
        </div>
      }

      {editMode &&
        <button  className={`${styles.btnActions} ${styles.saveBtn} flex flex-row items-center`}>
          <BiUpload />
          Зберегти
        </button>
      }

    </div>
  )
}
