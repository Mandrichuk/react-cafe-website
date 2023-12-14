import React, { useState } from "react";
import styles from "./bannerAdd.module.css";
import { FaRegImage } from "react-icons/fa6";
import { MdOutlineTitle } from "react-icons/md";
import { MdOutlineArticle } from "react-icons/md";
import { BiUpload } from "react-icons/bi";
import menuData from "../../../data/menuData";
import Header from "../header/Header";
import AnimatedLine from "../../../animations/AnimatedLine";


export default function CreateMealEdit() {
  const getAllCategoriesName = menuData.map((item) => item.name);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    image: "",
    title: "",
    article: "",
  });

  function handleFormChange(event) {
    let value = event.target.value;

    setFormData((formData) => {
      return {
        ...formData,
        [event.target.name]: value,
      };
    });
  }

  function deleteChanges() {
    setFormData({
      image: "",
      title: "",
      article: "",
    });
  }

  function handleModeChange() {
    setEditMode((prevEditMode) => !prevEditMode);
  }

  console.log(formData);

  return (
    <div
      className={`${styles.mainContainer} flex flex-col items-center justify-between w-full`}
    >
      <Header />
      <div className="staffContent">

        <AnimatedLine />
        <div className={`titleText mb-3`}>Додання нового банера</div>


        <div className={`${styles.categoryContainer}`}>
          <div
            className={`${styles.specificationContainer} input rounded-none`}
          >
            <MdOutlineTitle className="text-custom-green mr-[10px]" />
            Назва банера
          </div>

          <input
            onChange={handleFormChange}
            placeholder="Введіть назву"
            className={`${styles.changeMealInput} ${styles.inputSection} input rounded-none`}
            type="text"
            name="title"
            value={formData.title}
          />
        </div>

        <div className={`${styles.categoryContainer}`}>
          <div
            className={`${styles.specificationContainer} input rounded-none`}
          >
            <FaRegImage className="text-custom-green mr-[10px]" />
            Зображення банера
          </div>

          <input
            type="file"
            name="image"
            onChange={handleFormChange}
            className={`${styles.changeMealInput} ${styles.inputSection} input rounded-none`}
            // type="text"
            // name="image"
            // value={formData.image}
          />
        </div>

        <div className={`${styles.categoryContainerContainer}`}>
          <div
            className={`${styles.specificationContainer} input rounded-none`}
          >
            <MdOutlineArticle  className="text-custom-green mr-[10px]" />
            Cтаття
          </div>

          <textarea
            onChange={handleFormChange}
            placeholder="Введіть статтю.."
            className={`${styles.changeMealInput} w-full input rounded-none mb-[20px] min-h-[100px]`}
            rows="6"
            type="text"
            name="article"
            value={formData.article}
          />
        </div>

        <div
          className={`${styles.btnsContainer} flex flex-row items-center justify-center w-full`}
        >
          <button
            onClick={deleteChanges}
            className={`${styles.inputSection} btn bg-red-800 flex-1 mr-[4px] flex items-center`}
          >
            <MdOutlineArticle className="mr-[10px] mt-[5px]" />
            Видалити зміни
          </button>

          <button
            onClick={handleModeChange}
            className={`${styles.inputSection} btn flex-1 ml-[4px] flex items-center`}
          >
            <BiUpload className="mr-[10px] mt-[5px]" />
            Додати до новин
          </button>
        </div>
      </div>
    </div>
  );
}
