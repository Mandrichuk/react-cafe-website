import React from "react";
import styles from "../../styles/pages/order.module.css";

import Header from "../shared/header/CreateHeader.jsx";
import Main from "./CreateMain.jsx";
import Footer from "../shared/CreateFooter.jsx";


export default function CreateOrder(props) {

  return (
    <>
      <Header />
      <Main {...props} />
      {/* <Footer /> */}
    </>
  );
}