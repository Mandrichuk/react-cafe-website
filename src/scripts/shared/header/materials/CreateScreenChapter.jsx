import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../../../styles/shared/header.css";


export default function CreateScreenChapter(props) {
  const [currentPageStyle, setCurrentPageStyle] = useState("");

  useEffect(() => {
    if (props.link !== window.location.pathname) setCurrentPageStyle("screen_not-current-page");
    else setCurrentPageStyle("screen_current-page");
  }, [props.currentLink]); 

  const styleText = currentPageStyle + "-text";

  return (
    <div className={`${currentPageStyle} text-info text-[1.3rem] mt-[2px]`}>
      <Link onClick={() => {props.RerenderHeader(); props.handleChange();}} to={props.link} className={`${styleText} text-gray-600 pl-[4px] pr-[4px]`}>{props.name}</Link>
    </div>
  );
}