import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export default function CreateHeader() {

  return (
    <div className={`fixed top-[0] flex flex-row items-center h-[70px] w-[100%] bg-black justify-center text-white`}>
    <Link to="/superadmin" className="h-full flex items-center justify-center">
      <img src="/images/icons/drink-food-logo.png" className="w-[160px]" />
    </Link>
    </div>
  ); 
}
