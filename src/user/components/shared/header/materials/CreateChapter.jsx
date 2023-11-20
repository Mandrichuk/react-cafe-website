import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../../../styles/shared/header.css";


export default function CreateChapter(props) {
  const [currentPageStyle, setCurrentPageStyle] = useState("");

  useEffect(() => {
    if (props.link !== window.location.pathname) setCurrentPageStyle("not-current-page");
    else setCurrentPageStyle("current-page");
  }, [props.currentLink]); 


  return (
    <Link onClick={props.RerenderHeader} to={props.link} className="text-custom-light-cream">
      <div className={`${currentPageStyle} text-info  pb-[15px] pt-[15px] p-[10px] text-[1rem] max-w-[100px] transition-all   duration-100`}>
          {props.name}
      </div>
  </Link> 
  );
}