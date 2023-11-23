import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "./index.css";

//* User Components
import CafeUser from "./user/components/cafe/Cafe";
import MenuUser from "./user/components/menu/Menu";
import LoginUser from "./user/components/login/Login";
import CartUser from "./user/components/cart/Cart";
import ProfileUser from "./user/components/profile/Profile";
import OrderUser from "./user/components/order/Order";
import SuccessUser from "./user/components/success/Success";

//* Admin Components
import AdminLoginUser from "./admin/components/loginUser/LoginUser";
import AdminRegisterUser from "./admin/components/registerUser/RegisterUser";

//* Super Admin Components
import SharedHeaderSuperAdmin from "./superadmin/components/shared/header/Header";
import LoginSuperAdmin from "./superadmin/components/login/Login";
import NavigationSuperAdmin from "./superadmin/components/navigation/Navigation";
import AdminSettingsSuperAdmin from "./superadmin/components/adminSettings/AdminSettings";
import MenuSettingsSuperAdmin from "./superadmin/components/menuSettings/MenuSettings";
import MealEdit from "./superadmin/components/mealEdit/MealEdit";
import MenuSuccess from "./superadmin/components/menuSuccess/MenuSuccess";
import MealAdd from "./superadmin/components/mealAdd/MealAdd";

import getTotalPrice from "./user/components/shared/getTotalPrice";

// * Common
import Error404 from "./common/error404/Error404";


export default function CreateApp() {
  const [isLoggined, setIsLoggined] = useState(false);
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
      {currentLink.includes("superadmin") && <SharedHeaderSuperAdmin currentLink={currentLink}/>}
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

      // * Admin Components
        <Route path="/admin/login/user" element={<AdminLoginUser />} />
        <Route path="/admin/register/user" element={<AdminRegisterUser />} />
       


      //* Super Admin Components

        <Route path="/admin/login" element={<LoginSuperAdmin />}/> 
        <Route path="/superadmin" element={<NavigationSuperAdmin />} />
        <Route path="/superadmin/admin" element={<AdminSettingsSuperAdmin />} />
        <Route path="/superadmin/menu" element={<MenuSettingsSuperAdmin />} />
        <Route path="/superadmin/menu/edit/meal/*" element={<MealEdit />} />
        <Route path="/superadmin/menu/success" element={<MenuSuccess />} />
        <Route path="/superadmin/menu/add/meal" element={<MealAdd />} />
      
      // * Common
      <Route path="*" element={<Error404 />} />

      </Routes>
    </div>
  );
} 