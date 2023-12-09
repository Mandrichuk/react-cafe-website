import React, { useState } from "react";
import styles from "../../styles/pages/mealAdd.module.css";
import { TbCategoryFilled } from "react-icons/tb";
import { GiHotMeal, GiPriceTag } from "react-icons/gi";
import { RiScales2Line } from "react-icons/ri";
import { IoWaterOutline } from "react-icons/io5";
import { AiOutlineDelete } from "react-icons/ai";
import { BiUpload } from "react-icons/bi";
import menuData from "../../../data/menuData";


export default function CreateMealEdit() {
  const getAllCategoriesName = menuData.map((item) => item.name);
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
      value = value.replace(/[^0-9]/g, "");
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
    });
  }

  function handleModeChange() {
    setEditMode((prevEditMode) => !prevEditMode);
  }

  return (
    <div
      className={`${styles.mainContainer} flex flex-col items-center justify-between w-full`}
    >
      <div className="staffContent">
        <div className={`${styles.categoryContainer}`}>
          <div
            className={`${styles.specificationContainer} input rounded-none`}
          >
            <TbCategoryFilled className="text-custom-green mr-[10px]" />{" "}
            Категорія
          </div>

          <section
            id="unitsSection"
            className={`${styles.unitsSection} ${styles.inputSection} input rounded-none h-[45.6px]`}
          >
            <select
              onChange={handleFormChange}
              id="unitSelector"
              className={`${styles.unitsSelect} w-full flex justify-between`}
              name="catetory"
            >
              <option selected hidden value={0}>
                {"Оберіть категорію"}
              </option>
              {getAllCategoriesName.map((categoryName) => {
                if (categoryName !== formData.name) {
                  return (
                    <option key={categoryName} value={categoryName}>
                      {categoryName}
                    </option>
                  );
                }
              })}
            </select>
          </section>
        </div>

        <div className={`${styles.categoryContainer}`}>
          <div
            className={`${styles.specificationContainer} input rounded-none`}
          >
            <GiHotMeal className="text-custom-green mr-[10px]" />
            Назва
          </div>

          <input
            onChange={handleFormChange}
            placeholder="Введіть назву"
            className={`${styles.changeMealInput} ${styles.inputSection} input rounded-none`}
            type="text"
            name="name"
            value={formData.name}
          />
        </div>

        <div className={`${styles.categoryContainer}`}>
          <div
            className={`${styles.specificationContainer} input rounded-none`}
          >
            <RiScales2Line className="text-custom-green mr-[10px]" />
            Об'єм
          </div>

          <input
            onChange={handleFormChange}
            placeholder="Введіть об'єм"
            className={`${styles.changeMealInput} ${styles.inputSection} input rounded-none`}
            type="text"
            name="capacity"
            value={formData.capacity}
          />
        </div>

        <div className={`${styles.categoryContainer}`}>
          <div
            className={`${styles.specificationContainer} input rounded-none`}
          >
            <IoWaterOutline className="text-custom-green mr-[10px]" />
            Вимір
          </div>

          <section
            id="unitsSection"
            className={`${styles.unitsSection} ${styles.inputSection} input rounded-none h-[45.6px]`}
          >
            <select
              onChange={handleFormChange}
              id="unitSelector"
              className={`${styles.unitsSelect} w-full flex justify-between`}
              name="units"
            >
              <option selected hidden value={0}>
                {"Оберіть вимір"}
              </option>
              <option value="мг">Гр</option>
              <option value="гм">Мг</option>
            </select>
          </section>
        </div>

        <div className={`${styles.categoryContainer}`}>
          <div
            className={`${styles.specificationContainer} input rounded-none`}
          >
            <GiPriceTag className="text-custom-green mr-[10px]" />
            Ціна
          </div>

          <input
            onChange={handleFormChange}
            placeholder="Введіть ціну"
            className={`${styles.changeMealInput} ${styles.inputSection} input rounded-none`}
            type="text"
            name="price"
            value={formData.price}
          />
        </div>

        <div
          className={`${styles.btnsContainer} flex flex-row items-center justify-center w-full`}
        >
          <button
            onClick={deleteChanges}
            className={`btn bg-red-800 flex-1 mr-[4px]`}
          >
            <AiOutlineDelete className="mr-[10px] mt-[5px]" />
            Видалити всі зміни
          </button>

          <button
            onClick={handleModeChange}
            className={`${styles.inputSection} btn flex-1 ml-[4px]`}
          >
            <BiUpload className="mr-[10px] mt-[5px]" />
            Додати до меню
          </button>
        </div>
      </div>
    </div>
  );
}
