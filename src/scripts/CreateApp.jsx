import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Cafe from "../scripts/cafe/CreateCafe.jsx";
import Menu from "../scripts/menu/CreateMenu.jsx";
import Login from "../scripts/login/CreateLogin.jsx";
import Cart from "../scripts/cart/CreateCart.jsx";
import Profile from "../scripts/profile/CreateProfile.jsx";


export default function CreateApp() {
  const [cart, setCart] = useState([]);
  const [isLoggined, setIsLoggined] = useState(false);

  function handleCartChange(mealId) {
    const existingCartItem = cart.find(item => item.id === mealId);
    if (existingCartItem) {
      setCart(cart => (
        cart.map(item =>
          item.id === mealId ? { ...item, amount: item.amount + 1 } : item
        )
      ));
    } else {
      setCart(cart => [ ...cart, { id: mealId, amount: 1 }]);
    }
  }

  function handleAmountChange(id, amount, sign) {
    if (sign) {
      setCart(cart => {
        return cart.map(item => {
          return item.id === id ? { ...item, amount: item.amount + 1 } : item;
        });
      });
    }
    else {
      let isZero = 0;
      
      setCart(cart => {
        return cart.map(item => {
          if (item.amount > 0) {
            isZero = 1;
          }
          return item.id === id ? { ...item, amount: item.amount - isZero } : item;
        });
      });
    }

    validAmount();
  }

  function validAmount() {
    setCart(cart => {
      const newCart = cart.filter(item => item.amount > 0);
      return newCart;
    })  
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Cafe />} />
        <Route path="/menu" element={<Menu cart={cart} handleCartChange={handleCartChange} />} />
        {isLoggined ? 
          <Route path="/login" element={<Profile />} /> :
          <Route path="/login" element={<Login />} />
        }
        <Route path="/cart" element={<Cart cart={cart} handleAmountChange={handleAmountChange} />} /> 
      </Routes>
    </Router>
  );
}
