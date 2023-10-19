import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../../../styles/shared/header.css";


export default function CreateChapter(props) {
  console.log(props)

  const [currentPageStyle, setCurrentPageStyle] = useState("");

  useEffect(() => {
    if (props.link !== window.location.pathname) setCurrentPageStyle("");
    else setCurrentPageStyle("current-page");
  }, [props.plusOne]); 


  return (
    <Link onClick={props.RerenderHeader} to={props.link} className="text-white">
    <div className={`${currentPageStyle} text-info  pb-[15px] pt-[15px] p-[10px] text-[1rem] max-w-[100px] transition-all duration-100`}>
        {props.name}
    </div>
  </Link> 
  );
}