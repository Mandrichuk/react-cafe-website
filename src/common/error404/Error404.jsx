import React from "react";
import { Link } from "react-router-dom";
import styles from "./error404.module.css";
import Header from "../../user/components/header/Header";
import images from "../../constants/index";

function Error404() {
  return (
    <>
      <Header />
      <div
        className={`${styles.main} flex flex-col items-center justify-center h-[80vh] w-full`}
      >
        <img
          className={`${styles.bgImage}`}
          src={images.error404}
        />
        <Link to="/" className={`btn mt-[40px]`}>
          До головної
        </Link>
      </div>
    </>
  );
}

export default Error404;
