import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";

//* User Components
import CafeUser from "./user/scripts/cafe/CreateCafe.jsx";
import MenuUser from "./user/scripts/menu/CreateMenu.jsx";
import LoginUser from "./user/scripts/login/CreateLogin.jsx";
import CartUser from "./user/scripts/cart/CreateCart.jsx";
import ProfileUser from "./user/scripts/profile/CreateProfile.jsx";
import OrderUser from "./user/scripts/order/CreateOrder.jsx";
import SuccessUser from "./user/scripts/success/CreateSuccess.jsx";
import SharedHeaderUser from "./user/scripts/shared/header/CreateHeader.jsx";

//* Super Admin Components
import SharedHeaderSuperAdmin from "./super-admin/scripts/shared/header/CreateHeader.jsx";
import LoginSuperAdmin from "./super-admin/scripts/login/CreateLogin.jsx";
import NavigationSuperAdmin from "./super-admin/scripts/navigation/CreateNavigation.jsx";
import AdminSettingsSuperAdmin from "./super-admin/scripts/adminSettings/CreateAdminSettings.jsx";
import MenuSettingsSuperAdmin from "./super-admin/scripts/menuSettings/CreateMenuSettings.jsx";
import MealEdit from "./super-admin/scripts/mealEdit/CreateMealEdit.jsx";


import getTotalPrice from "./user/scripts/shared/getTotalPrice.jsx";




export default function CreateApp() {

  const [isLoggined, setIsLoggined] = useState(true);
  const [getCode, setGetCode] = useState({});
  const [cart, setCart] = useState([]);
  const [history, setHistory] = useState([]);
  const [currentLink, setCurrentLink] = useState("/");

  const location = useLocation();
  const navigate = useNavigate();

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
    <div className="mt-[80px]">
      {!currentLink.includes("admin") && 
        <SharedHeaderUser isLoggined={isLoggined} RerenderHeader={handleLinkChange} currentLink={currentLink} />
      }

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
      </Routes>
      

    </div>
  );
} 