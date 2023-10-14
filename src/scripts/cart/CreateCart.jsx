import React, { useState } from "react";
import styles from "../../styles/pages/cart.module.css";

import Header from "../shared/CreateHeader";
import Main from "./CreateMain.jsx";

export default function CreateCart(props) {

  return (
    <>
      <Header />
      <Main {...props} />
    </>
  );
}
