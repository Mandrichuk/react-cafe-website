import React, { useState } from 'react';
import styles from '../../styles/pages/mealEdit.module.css';
import mealById from '../../../user/components/shared/getMeal';

import { TbCategoryFilled, TbStatusChange } from "react-icons/tb";
import { GiConsoleController, GiHotMeal, GiPriceTag } from "react-icons/gi";
import { RiScales2Line } from "react-icons/ri";
import { IoWaterOutline } from "react-icons/io5";
import { AiOutlineDelete } from "react-icons/ai";
import { BiUpload } from "react-icons/bi";

import menuData from '../../../data/menu/menuData';

export default function CreateMealEdit() {
  const getAllCategoriesName = menuData.map(item => item.name);
  const currentPath = window.location.pathname;
  const pathSegments = currentPath.split('/');
  const lastSegment = Number(pathSegments[pathSegments.length - 1]);

  let currentMeal = mealById(lastSegment);
  const currentCategory = menuData[currentMeal.categoryId - 1];

  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    catetory: currentMeal,
    name: currentMeal.name,
    capacity: currentMeal.grams,
    units: currentMeal,
    price: currentMeal.price,
  });

  function handleFormChange(event) {
    let value = event.target.value;

    if (event.target.name === "capacity" || event.target.name === "price") {
      value = value.replace(/[^0-9]/g, '');
    }

    setFormData((formData) => {
      return {
        ...formData,
        [event.target.name]: value,
      };
    });
  }
  
  
  function handleModeChange() {setEditMode((prevEditMode) => !prevEditMode);}
  function capitalize(str) {return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();}


  return (
    <div className={`${styles.mainContainer} flex flex-col items-center justify-between w-[100%] mt-[120px]`}>

      <div className={`${styles.categoryContainer}`}>
        <div className={`${styles.specificationContainer}`}>
          <TbCategoryFilled className="text-custom-green mr-[10px]"/> Категорія
        </div>
        {editMode ?
            <section id="unitsSection" className={`${styles.unitsSection}`}>
            <select 
              onChange={handleFormChange} 
              id="unitSelector" 
              className={`${styles.unitsSelect}`}
              name="catetory"
            >
            <option key={currentCategory.name} value={currentCategory.name}>{currentCategory.name}</option>
            {getAllCategoriesName.map(categoryName => {
              if (categoryName !== currentCategory.name) {
                return <option key={categoryName} value={categoryName}>{categoryName}</option>
              }
              })}
            </select>
            </section>  :
          <div className={`${styles.currentMealContainer}`}>{currentCategory.name}</div>
        }
      </div>

      <div className={`${styles.categoryContainer}`}>
        <div className={`${styles.specificationContainer}`}>
          <GiHotMeal className="text-custom-green mr-[10px]"/>
          Назва
        </div>
        {editMode ?
          <input 
          onChange={handleFormChange}
          placeholder="Введіть назву"
          className={`${styles.changeMealInput}`}
          type="text"
          name="name"
          value={formData.name}
          /> :
          <div className={`${styles.currentMealContainer}`}>{currentMeal.name}</div> 
        }
      </div>

      <div className={`${styles.categoryContainer}`}>
        <div className={`${styles.specificationContainer}`}>
          <RiScales2Line className="text-custom-green mr-[10px]"/>
          Об'єм
        </div>
        {editMode ?
          <input 
          onChange={handleFormChange}
          placeholder="Введіть об'єм"
          className={`${styles.changeMealInput}`}
          type="text"
          name="capacity"
          value={formData.capacity}
          /> :
          <div className={`${styles.currentMealContainer}`}>{currentMeal.capacity}</div> 
        }
      </div>

      <div className={`${styles.categoryContainer}`}>
        <div className={`${styles.specificationContainer}`}>
          <IoWaterOutline className="text-custom-green mr-[10px]"/>
          Одиниці виміру
        </div>
        {editMode ?
          <section id="unitsSection" className={`${styles.unitsSection}`}>
            <select 
              onChange={handleFormChange}
              id="unitSelector" 
              className={`${styles.unitsSelect}`}
              name="units"
              >
              <option value="{currentMeal.units}">{capitalize(currentMeal.units)}</option>
              {currentMeal.units === "гм" ?
                <option value="мг">Гр</option> :
                <option value="гм">Мг</option> 
              } 
            </select>
          </section> :
          <div className={`${styles.currentMealContainer}`}>{capitalize(currentMeal.units)}</div> 
        }
      </div>

      <div className={`${styles.categoryContainer}`}>
        <div className={`${styles.specificationContainer}`}>
          <GiPriceTag className="text-custom-green mr-[10px]"/>
          Ціна
        </div>
        {editMode ?
          <input 
          onChange={handleFormChange}
          placeholder="Введіть ціну" 
          className={`${styles.changeMealInput}`}
          type="text"
          name="price"
          value={formData.price}
          /> :
          <div className={`${styles.currentMealContainer}`}>{currentMeal.price}</div> 
        }
      </div>

      {!editMode &&
        <div className={`${styles.btnsContainer} flex flex-row items-center justify-center`}>
            <button onClick={handleModeChange} className={`${styles.btnActions} ${styles.changeBtn} flex flex-row items-center`}>
              <TbStatusChange className='mr-[10px]'/>
              Змінити
            </button>
        
            <button className={`${styles.btnActions} ${styles.deleteBtn} flex flex-row items-center`}>
              <AiOutlineDelete className='mr-[10px]'/>
              Видалити
            </button>
        </div>
      }
      {editMode &&
        <button onClick={handleModeChange}  className={`${styles.btnActions} ${styles.saveBtn} flex flex-row items-center`}>
          <BiUpload className='mr-[10px]'/>
          Зберегти
        </button>
      }

    </div>
  )
}

