import React, { useState, useEffect } from "react";
import styles from "./news.module.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import newsData from "../../../data/newsData";
import AnimatedLine from "../../../motion/AnimatedLine";


function News() {
  return (
    <>
      <Header />

      <div
        className={`${styles.headerSection} relative w-full flex flex-col max-h-[140px]`}
      >
        <div
          className={`${styles} w-full  absolute h-full flex flex-col items-center justify-center`}
        >
          <div
            className={`${styles.headerText} titleText bg-white py-[20px] px-[20px]  flex items-center justify-center`}
          >
            Актуальні новини
          </div>
        </div>
      </div>
      <img
        className={`mt-[10px] w-full object-fit`}
        src="/images/background/fries.svg"
      />

      <div
        className={`${styles.cover} flex flex-col items-center justify-center`}
      >
        <div className={`${styles.main}`}>
          {newsData.map((newsItem) => (
            <CreateNewsItem {...newsItem} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

function CreateNewsItem(props) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <div className={`${styles.itemContainer} w-full flex flex-col`}>
          <div className={`${styles.textTitle} flex flex-col titleText`}>
            <AnimatedLine />
            {props.name}
          </div>
          <div className={`${styles.infoContainer} mb-[20px]`}>
            <img id={`${props.id}`} src={`images/background/${props.image}`} />
          </div>
          <div className={`${styles.articleContainer} articleText`}>
            {props.article}
          </div>
        </div>
      ) : (
        <div className={`${styles.itemContainer} w-full flex flex-row`}>
          <div
            className={`${styles.infoContainer} mb-[20px] min-w-[350px]  max-w-[700px] flex-1`}
          >
            <img
              id={`${props.id}`}
              src={`images/background/${props.image}`}
              className={`object-cover`}
            />
          </div>
          <div
            className={`${styles.allTextContainer} flex flex-col max-w-[800px] ml-[5%]`}
          >
            <div className={`${styles.textTitle} flex flex-col titleText`}>
              <div className="animatedLine" />
              {props.name}
            </div>
            <div className={`${styles.articleContainer} articleText`}>
              {props.article}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default News;
