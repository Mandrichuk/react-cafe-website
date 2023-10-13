import React from "react";

import "../../styles/pages/menu.module.css";

import Header from "./CreateHeader.jsx";
import Main from "./CreateMain.jsx";
import Footer from "./CreateFooter.jsx";

export default function CreateMenu(props) {

  return (
    <>
      <Header />
      <Main {...props}/>
      <Footer />
    </>
  )
}