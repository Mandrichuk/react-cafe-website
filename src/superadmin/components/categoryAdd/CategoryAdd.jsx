import React, { useState } from "react";
import styles from "../../styles/pages/categoryAdd.module.css";
import { GiHotMeal } from "react-icons/gi";
import { FaImage } from "react-icons/fa6";
import { AiOutlineDelete } from "react-icons/ai";
import { BiUpload } from "react-icons/bi";


function CategoryAdd() {
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    icon: "",
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
      name: "",
      icon: "",
    });
  }

  function handleModeChange() {
    setEditMode((prevEditMode) => !prevEditMode);
  }

  return (
    <div className="w-full flex items-center justify-center">
      <div className={`staffContent`}>
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
            <FaImage className="text-custom-green mr-[10px]" />
            Значок
          </div>

          <input
            onChange={handleFormChange}
            placeholder="Введіть назву"
            className={`${styles.changeMealInput} ${styles.inputSection} input rounded-none`}
            type="text"
            name="icon"
            value={formData.icon}
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

export default CategoryAdd;
