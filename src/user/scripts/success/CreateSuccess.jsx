import React from "react";
import {Link} from "react-router-dom";
import styles from "../../styles/pages/success.module.css";

import Header from "../shared/header/CreateHeader.jsx";
import Main from "./CreateMain.jsx";

export default function CreateSuccess(props) {
  return (
    <div className="text-black">
      <Header />
      <Main {...props} />
    </div>  
  );
}