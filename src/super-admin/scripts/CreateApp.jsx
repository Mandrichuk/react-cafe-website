import { current } from "@reduxjs/toolkit";
import React, {useState, useEffect} from "react";
import { Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";

import SharedHeader from "./shared/header/CreateHeader";
import Login from "./login/CreateLogin.jsx";
import Navigation from "./navigation/CreateNavigation.jsx";
import AdminSettings from "./adminSettings/CreateAdminSettings.jsx";
import MenuSettings from "./menuSettings/CreateMenuSettings.jsx";


export default function CreateApp() {
  const [isLoggined, setIsLoggined] = useState(false);
  const [currentLink, setCurrentLink] = useState("/");

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    handleLinkChange();
  }, [location.pathname]);

  function handleLinkChange() {
    setCurrentLink(window.location.href);
  }


  return (
      <>
      {currentLink.includes("admin") && <SharedHeader currentLink={currentLink}/>}
      <Routes>

        <Route path="/admin/login" element={<Login />}/> 
        <Route path="/superadmin" element={<Navigation />} />
        <Route path="/superadmin/admin" element={<AdminSettings />} />
        <Route path="/superadmin/menu" element={<MenuSettings />} />


      </Routes>
      </>
  )
}