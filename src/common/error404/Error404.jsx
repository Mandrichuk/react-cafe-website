import React from 'react';
import { Link } from 'react-router-dom';
import styles from "../styles/error404.module.css";
import Header from "../../user/components/shared/header/Header";

function Error404() {
  return (
    <>
      <Header />
      <div className={`${styles.main} flex flex-col items-center justify-center h-[80vh] w-full`}>
        <img className={`${styles.bgImage}`} src="/images/background/error404.png" />
        <Link to="/" className={`btn mt-[40px]`}>До головної </Link>
      </div>
    </>
  );
}

export default Error404;