import React, { useState } from 'react';
import styles from '../../styles/pages/menuAdd.module.css';

import { TbCategoryFilled, TbStatusChange } from "react-icons/tb";
import { GiConsoleController, GiHotMeal, GiPriceTag } from "react-icons/gi";
import { RiScales2Line } from "react-icons/ri";
import { IoWaterOutline } from "react-icons/io5";
import { AiOutlineDelete } from "react-icons/ai";
import { BiUpload } from "react-icons/bi";

import menuData from '../../../data/menu/menuData';


export default function CreateMealEdit() {
  const getAllCategoriesName = menuData.map(item => item.name);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    catetory: "",
    name: "",
    capacity: "",
    units: "",
    price: "",
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
  
  function deleteChanges() {
    setFormData({
      catetory: "",
      name: "",
      capacity: "",
      units: "",
      price: "",
    })
  }
  
  function handleModeChange() {setEditMode((prevEditMode) => !prevEditMode);}
  function capitalize(str) {return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();}


  return (
    <div className={`${styles.mainContainer} flex flex-col items-center justify-between w-[100%] mt-[120px]`}>

      <div className={`${styles.categoryContainer}`}>
        <div className={`${styles.specificationContainer}`}>
          <TbCategoryFilled className="text-custom-green mr-[10px]"/> Категорія
        </div>

          <section id="unitsSection" className={`${styles.unitsSection}`}>
          <select 
            onChange={handleFormChange} 
            id="unitSelector" 
            className={`${styles.unitsSelect}`}
            name="catetory"
          >
          <option selected hidden key={0} value={0}>{"Оберіть категорію"}</option>
          {getAllCategoriesName.map(categoryName => {
            if (categoryName !== formData.name) {
              return <option key={categoryName} value={categoryName}>{categoryName}</option>
            }
            })}
          </select>
          </section> 
        
      </div>

      <div className={`${styles.categoryContainer}`}>
        <div className={`${styles.specificationContainer}`}>
          <GiHotMeal className="text-custom-green mr-[10px]"/>
          Назва
        </div>

          <input 
          onChange={handleFormChange}
          placeholder="Введіть назву"
          className={`${styles.changeMealInput}`}
          type="text"
          name="name"
          value={formData.name}
          /> 

      </div>

      <div className={`${styles.categoryContainer}`}>
        <div className={`${styles.specificationContainer}`}>
          <RiScales2Line className="text-custom-green mr-[10px]"/>
          Об'єм
        </div>
        
          <input 
          onChange={handleFormChange}
          placeholder="Введіть об'єм"
          className={`${styles.changeMealInput}`}
          type="text"
          name="capacity"
          value={formData.capacity}
          /> 

      </div>

      <div className={`${styles.categoryContainer}`}>
        <div className={`${styles.specificationContainer}`}>
          <IoWaterOutline className="text-custom-green mr-[10px]"/>
          Одиниці виміру
        </div>

          <section id="unitsSection" className={`${styles.unitsSection}`}>
            <select 
              onChange={handleFormChange}
              id="unitSelector" 
              className={`${styles.unitsSelect}`}
              name="units"
              >
              <option value="мг">Гр</option> 
              <option value="гм">Мг</option> 
            </select>
          </section> 

      </div>

      <div className={`${styles.categoryContainer}`}>
        <div className={`${styles.specificationContainer}`}>
          <GiPriceTag className="text-custom-green mr-[10px]"/>
          Ціна
        </div>

          <input 
          onChange={handleFormChange}
          placeholder="Введіть ціну" 
          className={`${styles.changeMealInput}`}
          type="text"
          name="price"
          value={formData.price}
          /> 

      </div>

        <div className={`${styles.btnsContainer} flex flex-row items-center justify-center`}>
          <button onClick={deleteChanges} className={`${styles.btnActions} ${styles.deleteBtn} flex flex-row items-center`}>
            <AiOutlineDelete className='mr-[10px]'/>
            Видалити всі зміни 
          </button>
    
          <button onClick={handleModeChange}  className={`${styles.btnActions} ${styles.saveBtn} flex flex-row items-center`}>
            <BiUpload className='mr-[10px]'/>
            Додати до меню
          </button>
        </div>
      

    </div>
  )
}
