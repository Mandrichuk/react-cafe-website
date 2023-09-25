import React from "react";

import "../styles/pages/cafe.css";

import Header from "./cafe/CreateHeader.jsx";
import Main from "./cafe/CreateMain.jsx";
import Footer from "./cafe/CreateFooter.jsx";

export default function CreateApp() {
  const app = (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );

  return app;
}
