import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";

import Cafe from "../scripts/cafe/CreateCafe.jsx";
import Menu from "../scripts/menu/CreateMenu.jsx";
import Login from "../scripts/login/CreateLogin.jsx";
import Cart from "../scripts/cart/CreateCart.jsx";
import Profile from "../scripts/profile/CreateProfile.jsx";
import Order from "./order/CreateOrder.jsx";
import Success from "./success/CreateSuccess.jsx";
import SharedHeader from "./shared/header/CreateHeader.jsx";

import getTotalPrice from "./shared/getTotalPrice.jsx";
import isPhoneValid from "./shared/isPhoneValid.jsx";

export default function CreateApp() {
  const [isLoggined, setIsLoggined] = useState(false);
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
    setCurrentLink(window.location.href);
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
    <>
      <Routes>
        <Route path="/" element={<Cafe />} />
        <Route path="/menu" element={<Menu cart={cart} handleCartChange={handleCartChange} />} />
        {isLoggined ? (
          <Route path="/login" element={<Profile history={history} />} />
        ) : (
          <Route path="/login" element={<Login />} />
        )}
        <Route path="/cart" element={<Cart cart={cart} handleAmountChange={handleAmountChange} handleHistoryAdd={handleHistoryAdd} isLoggined={isLoggined} RerenderHeader={handleLinkChange} />} />
        <Route path="/order" element={<Order history={history} />} />
        <Route path="/success" element={<Success cart={cart} handleHistoryAdd={handleHistoryAdd} setCurrentLink={setCurrentLink} />} />
      </Routes>
      
      {!currentLink.includes("admin") && 
        <SharedHeader isLoggined={isLoggined} RerenderHeader={handleLinkChange} currentLink=  {currentLink} />
      }
    </>
  );
}
