import React, { useState, useEffect } from "react";
import styles from "./news.module.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import AnimatedLine from "../../../animations/AnimatedLine";
import images, { newsData } from "../../../constants/index";
import TabTitle from "../../../common/TabTitle";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { MdModeEditOutline } from "react-icons/md";
import { MdOutlinePlaylistAdd } from "react-icons/md";


function News() {
  const isSuperAdminLoggined = useSelector(
    (state) => state.loggins.value.superAdminLoggined
  );

  return (
    <>
      <TabTitle title={"Новини"} />
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
      <img className={`mt-[10px] w-full object-fit`} src={images.friesSVG} />

      <div
        className={`${styles.cover} flex flex-col items-center justify-center`}
      >
        <div className={`${styles.main}`}>
          {isSuperAdminLoggined && (
            <div className={`${styles.addBanner}`}>
              <AnimatedLine />
              <div className={`titleText`}>Додати нову новину</div>
              <Link
                to={`/superadmin/add/banner`}
                className={`${styles.addBannerBtn} btn flex flex-row items-center justify-center`}
              >
                Додати
                <MdOutlinePlaylistAdd className={`ml-[5px] text-[1.6rem]`} />
              </Link>
            </div>
          )}

          {newsData.map((obj) => (
            <CreateNewsItem key={`news-item-${obj.id}`} {...obj} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

function CreateNewsItem(props) {
  const isSuperAdminLoggined = useSelector(
    (state) => state.loggins.value.superAdminLoggined
  );
  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);
  const newsImage = props.image;

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
        <>
          <div className={`${styles.itemContainer} w-full flex flex-col`}>
            <div className={`${styles.textTitle} flex flex-col titleText`}>
              <AnimatedLine />
              {props.name}
            </div>
            <div className={`${styles.infoContainer} mb-[20px]`}>
              <img id={`${props.id}`} src={newsImage} alt={"news-img"} />
            </div>
            <div className={`${styles.articleContainer} articleText`}>
              {props.article}
            </div>
          </div>
          {isSuperAdminLoggined && (
            <Link
              to={`/superadmin/edit/banner/${props.id}`}
              className={`${styles.EditBtn} btn flex flex-row items-center justify-center mt-4`}
            >
              Редагувати новину
              <MdModeEditOutline
                style={{
                  color: "white",
                  marginLeft: "5px",
                  fontSize: "1.6rem",
                }}
              />
            </Link>
          )}
        </>
      ) : (
        <>
          <div className={`${styles.itemContainer} w-full flex flex-row`}>
            <div
              className={`${styles.infoContainer} mb-[20px] min-w-[350px]  max-w-[700px] flex-1`}
            >
              <img
                id={`${props.id}`}
                src={newsImage}
                className={`object-cover`}
                alt={"news-img"}
              />

              {isSuperAdminLoggined && (
                <Link
                  to={`/superadmin/edit/banner/${props.id}`}
                  className={`${styles.EditBtn} btn flex flex-row items-center justify-center mt-4`}
                >
                  Редагувати новину
                  <MdModeEditOutline
                    style={{
                      color: "white",
                      marginLeft: "5px",
                      fontSize: "1.6rem",
                    }}
                  />
                </Link>
              )}
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
        </>
      )}
    </>
  );
}

export default News;
