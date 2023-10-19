import React from "react";
import styles from "../../styles/pages/login.module.css";

import Header from "../shared/header/CreateHeader.jsx";
import Main from "./CreateMain";

export default function CreateLogin(props) {
  return (
    <>
      <Header />
      <Main {...props}/>
    </>
  );
}