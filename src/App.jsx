import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";

import "./index.css";

//* User Components
import CafeUser from "./user/scripts/cafe/Cafe.jsx";
import MenuUser from "./user/scripts/menu/Menu.jsx";
import LoginUser from "./user/scripts/login/Login.jsx";
import CartUser from "./user/scripts/cart/Cart.jsx";
import ProfileUser from "./user/scripts/profile/Profile.jsx";
import OrderUser from "./user/scripts/order/Order.jsx";
import SuccessUser from "./user/scripts/success/Success.jsx";
import SharedHeaderUser from "./user/scripts/shared/header/Header.jsx";

//* Super Admin Components
import SharedHeaderSuperAdmin from "./superadmin/scripts/shared/header/Header.jsx";
import LoginSuperAdmin from "./superadmin/scripts/login/Login.jsx";
import NavigationSuperAdmin from "./superadmin/scripts/navigation/Navigation.jsx";
import AdminSettingsSuperAdmin from "./superadmin/scripts/adminSettings/AdminSettings.jsx";
import MenuSettingsSuperAdmin from "./superadmin/scripts/menuSettings/MenuSettings.jsx";
import MealEdit from "./superadmin/scripts/mealEdit/MealEdit.jsx";
import MenuSuccess from "./superadmin/scripts/menuSuccess/MenuSuccess.jsx";
import MenuAdd from "./superadmin/scripts/menuAdd/MenuAdd.jsx";

import getTotalPrice from "./user/scripts/shared/getTotalPrice.js";




export default function CreateApp() {
  const [isLoggined, setIsLoggined] = useState(true);
  const [cart, setCart] = useState([]);
  const [history, setHistory] = useState([]);
  const [currentLink, setCurrentLink] = useState("/");

  const location = useLocation();

  useEffect(() => {
    handleLinkChange();
  }, [location.pathname]);

  function handleLinkChange() {
    setCurrentLink(location.pathname);
  }  

  function handleHistoryAdd(comment) {
    const today = new Date();
    const formattedDate = `${today.getDate() < 10 ? '0' + today.getDate() : today.getDate()}/${today.getMonth()+1 < 10 ? '0' + today.getMonth()+1 : today.getMonth()+1}/${today.getFullYear()}`;

    const newHistoryEntry = {
      date: formattedDate,
      price: getTotalPrice(cart),
      cart: cart
    };

    setHistory(prevHistory => [...prevHistory, newHistoryEntry]);
    setCart([]);
  }

  function handleCartChange(mealId) {
    const existingCartItem = cart.find(item => item.id === mealId);
    setCart(cart => {
      if (existingCartItem) {
        return cart.map(item =>
          item.id === mealId ? { ...item, amount: item.amount + 1 } : item
        );
      } else return [...cart, { id: mealId, amount: 1 }];
    });
  }

  function handleAmountChange(id, amount, sign) {
    setCart(cart => {
      return cart.map(item => (item.id === id ? { ...item, amount: item.amount + (sign ? 1 : -1) } : item));
    });
    validAmount();
  }

  function validAmount() {
    setCart(cart => {
      return cart.filter(item => item.amount > 0);
    });
  }


  return (
    <div className="mt-[70px]">
      {/* {!currentLink.includes("admin") && 
        <SharedHeaderUser isLoggined={isLoggined} RerenderHeader={handleLinkChange} currentLink={currentLink} />
      } */}

      {currentLink.includes("admin") && <SharedHeaderSuperAdmin currentLink={currentLink}/>}
      <Routes>


      //* User Components

        <Route path="/" element={<CafeUser />} />
        <Route path="/menu" element={<MenuUser cart={cart} handleCartChange={handleCartChange} />} />
        {isLoggined ? 
          <Route path="/login" element={<ProfileUser history={history} />} /> : 
          <Route path="/login" element={<LoginUser />} />
        }
        <Route path="/cart" element={<CartUser cart={cart} handleAmountChange={handleAmountChange} handleHistoryAdd={handleHistoryAdd} isLoggined={isLoggined} RerenderHeader={handleLinkChange} />} />
        <Route path="/order" element={<OrderUser history={history} />} />
        <Route path="/success" element={<SuccessUser cart={cart} handleHistoryAdd={handleHistoryAdd} />} />

      //* Super Admin Components

        <Route path="/admin/login" element={<LoginSuperAdmin />}/> 
        <Route path="/superadmin" element={<NavigationSuperAdmin />} />
        <Route path="/superadmin/admin" element={<AdminSettingsSuperAdmin />} />
        <Route path="/superadmin/menu" element={<MenuSettingsSuperAdmin />} />
        <Route path="/superadmin/menu/edit/meal/*" element={<MealEdit />} />
        <Route path="/superadmin/menu/success" element={<MenuSuccess />} />
        <Route path="/superadmin/menu/add/meal" element={<MenuAdd />} />
      </Routes>
      

    </div>
  );
} 