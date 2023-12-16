import React, { useState, useEffect } from "react";
import styles from "./bannerEdit.module.css";
import { FaRegImage } from "react-icons/fa6";
import { MdOutlineTitle } from "react-icons/md";
import { MdOutlineArticle } from "react-icons/md";
import { BiUpload } from "react-icons/bi";
import { newsData } from "../../../constants/index";
import Header from "../header/Header";
import AnimatedLine from "../../../animations/AnimatedLine";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


export default function CreateMealEdit() {
  const navigation = useNavigate();
  const [isFormLegit, setIsFormLegit] = useState(false);
  const currentNewsId = Number(window.location.href.split("/").slice(-1)[0]);
  const [editMode, setEditMode] = useState(false);
  let currentNewsData = newsData.filter((item) => {
    return item.id === currentNewsId;
  });
  const [maxSymbols, setMaxSymbols] = useState(300); 
  const [articleSymbols, setArticleSymbols] = useState(0);
  const formattedNewsData = currentNewsData.slice(0)[0];
  const [formData, setFormData] = useState({
    image: formattedNewsData.image,
    title: formattedNewsData.name,
    article: formattedNewsData.article,
  });


  useEffect(() => {
    setArticleSymbols(formData.article.length);
  }, [formData.article]);


  function handleFormSubmit() {
    if (formData.image && formData.title && formData.article) {
      navigation("/news");
    }
  }

  function handleFormChange(event) {
    const { name, value, files } = event.target;

    if (name === "article" && value.length > maxSymbols) {
      return;
    }

    setFormData((formData) => ({
      ...formData,
      [name]: name === "image" ? files[0] : value,
    }));
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

  return (
    <div
      className={`${styles.mainContainer} flex flex-col items-center justify-between w-full`}
    >
      <Header />
      <div className="staffContent">
        <AnimatedLine />
        <div className={`titleText mb-3`}>Редагування банера</div>

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
          <div className={`${styles.specificationContainer} input rounded-none`}>
            <FaRegImage className="text-custom-green mr-[10px]" />
            Зображення банера
          </div>

          <div className={`${styles.inputSection} input rounded-none`}>
            <input
              id="file"
              type="file"
              name="image"
              accept="image/png, image/jpeg, image/jpg"
              onChange={handleFormChange}
              className={`${styles.changeMealInput}`}
            />
            <label htmlFor="file" className={`${styles.labelChooseImage}`}>
            Оберіть нове фото
            </label>
          </div>
        </div>

        <div className={`${styles.categoryContainerContainer}`}>
          <div
            className={`${styles.specificationContainer} input rounded-none flex flex-row items-center justify-between`}
          >

            <div />
            <div className={`flex flex-row items-center`}>
              <MdOutlineArticle className="text-custom-green mr-[10px]" />
              Cтаття
            </div>

            <div className="text-[1rem] text-gray-600">
              {articleSymbols}/{maxSymbols}
            </div>
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

          <Link
            onClick={handleFormSubmit}
            className={`${styles.inputSection} btn flex-1 ml-[4px] flex items-center`}
          >
            <BiUpload className="mr-[10px] mt-[5px]" />
            Змінити новину
          </Link>
        </div>
      </div>
    </div>
  );
}
