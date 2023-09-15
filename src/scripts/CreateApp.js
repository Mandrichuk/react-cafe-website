import React from "react";

import "../styles/pages/cafe.css";

import Header from "./cafe/CreateHeader.js";
import Main from "./cafe/CreateMain.js";
import Footer from "./cafe/CreateFooter.js";

export default function CreateApp() {
  const app = (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );

  return app;
}
