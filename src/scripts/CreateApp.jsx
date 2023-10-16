import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Cafe from "../scripts/cafe/CreateCafe.jsx";
import Menu from "../scripts/menu/CreateMenu.jsx";
import Login from "../scripts/login/CreateLogin.jsx";
import Cart from "../scripts/cart/CreateCart.jsx";
import Profile from "../scripts/profile/CreateProfile.jsx";


export default function CreateApp() {
  const [isLoggined, setIsLoggined] = useState(true);
  const [cart, setCart] = useState([]);
  const [history, setHistory] = useState([]);

  function handleHistoryAdd(comment) {
    setHistory(history => [...history, cart]);
    setCart([]);
  }
 
  function handleCartChange(mealId) {
    const existingCartItem = cart.find(item => item.id === mealId);
    setCart(cart => {
      if (existingCartItem) {
      return cart.map(item => 
          item.id === mealId ? {...item, amount: item.amount + 1} : item);
      } else return [...cart, {id: mealId, amount: 1}];
    });
  }

  function handleAmountChange(id, amount, sign) {
    setCart(cart => {
      return cart.map(item => item.id === id ? {...item, amount: item.amount + (sign ? 1 : -1)} : item); 
    });
    validAmount();
  }

  function validAmount() {
    setCart(cart => {
      return cart.filter(item => item.amount > 0);
    })  
  }


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Cafe />} />
        <Route path="/menu" element={<Menu cart={cart} handleCartChange={handleCartChange} />} />
        {isLoggined ? 
          <Route path="/login" element={<Profile history={history} />}  /> :
          <Route path="/login" element={<Login />} />
        }
        <Route path="/cart" element={<Cart cart={cart} handleAmountChange={handleAmountChange} handleHistoryAdd={handleHistoryAdd} />} /> 
      </Routes>
    </Router>
  );
}
