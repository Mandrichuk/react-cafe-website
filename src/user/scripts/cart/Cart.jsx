import React, { useState } from "react";
import styles from "../../styles/pages/cart.module.css";

import Header from "../shared/header/Header";
import Main from "./Main.jsx";

export default function CreateCart(props) {
  return (
    <>
      <Header />
      <Main {...props} />
    </>
  );
}
