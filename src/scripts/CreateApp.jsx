import React, {useState} from "react";

import "../styles/pages/cafe.css";

import Header from "./cafe/CreateHeader.jsx";
import Main from "./cafe/CreateMain.jsx";
import Footer from "./cafe/CreateFooter.jsx";

export default function CreateApp() {
  const [isMenu, setIsMenu] = useState(true);

  return (
    <>
      <Header 
        
      />
      <Main />
      <Footer />
    </>
  );

}
