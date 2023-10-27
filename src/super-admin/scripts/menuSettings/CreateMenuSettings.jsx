import React from "react";
import styles from "../../styles/pages/menuSettings.module.css";

import Product from "./materials/CreateProducts.jsx";
import menuData from "../../../data/menu/menuData.js";


export default function CreateMenuSettings() {


  return (
    <div className={`${styles.pageContainer} mt-[80px] ml-[20px]`}>

      <div className={`{${styles.addNewProduct}} w-[100%] flex flex-col items-center justify-center`}>

      <p className={`${styles.addMealText} font-bold text-[2.3rem] mb-[20px]`}>Додати нову страву</p>
        
      <div className="flex flex-col mb-[10px] mr-[20px] w-[40%] max-w-[300px]">
        <label for="category" className="text-[1.2rem] text-gray-600">Введіть категорію</label>
        <input placeholder="Категорія" id="category" className="border-[2px] border-l-[10px] p-[10px] pt-[5px] pb-[5px] border-black"/>
      </div>

      <div className="flex flex-col mb-[10px] mr-[20px] w-[40%] max-w-[300px]">
        <label for="name" className="text-[1.2rem] text-gray-600">Введіть назву страви</label>
        <input placeholder="Назва" id="name" className="border-[2px] border-l-[10px] p-[10px] pt-[5px] pb-[5px] border-black"/>
      </div>

      <div className="flex flex-col mb-[10px] mr-[20px] w-[40%] max-w-[300px]">
        <label for="price" className="text-[1.2rem] text-gray-600">Введіть ціну страви</label>
        <input placeholder="Ціна" id="price" className="border-[2px] border-l-[10px] p-[10px] pt-[5px] pb-[5px] border-black"/>
      </div>

      <div className="flex flex-col mb-[20px] mr-[20px] w-[40%] max-w-[300px]">
        <label for="grams" className="text-[1.2rem] text-gray-600">Введіть грамовку страви</label>
        <input placeholder="Грамовка" id="grams" className="border-[2px] border-l-[10px] p-[10px] pt-[5px] pb-[5px] border-black"/>
      </div>



        <button className=" bg-custom-green text-white p-[20px] pt-[10px] pb-[10px] mb-[50px] mr-[20px] w-[36%]">Підтвердити</button>


      </div>

      {menuData && menuData.map(menuCategory => <Product menuCategory={menuCategory} />)}
    </div>
  );

}