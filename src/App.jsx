import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import "./index.css";

//* User Components
import CafeUser from "./user/components/cafe/Cafe";
import MenuUser from "./user/components/menu/Menu";
import LoginUser from "./user/components/login/Login";
import CartUser from "./user/components/cart/Cart";
import ProfileUser from "./user/components/profile/Profile";
import OrderUser from "./user/components/order/Order";
import SuccessUser from "./user/components/success/Success";
import NewsUser from "./user/components/news/News";

import getTotalPrice from "./utils/getTotalPrice";

//* Admin Components
import LoginUserAdmin from "./admin/components/loginUser/LoginUser";
import RegisterUserAdmin from "./admin/components/registerUser/RegisterUser";
import NavigationAdmin from "./admin/components/navigation/Navigation";
import MenuAdmin from "./admin/components/menu/Menu";
import CartAdmin from "./admin/components/cart/Cart";
import OrdersAdmin from "./admin/components/orders/Orders";

//* Super Admin Components
import NavigationSuperAdmin from "./superadmin/components/navigation/Navigation";
import AdminSettingsSuperAdmin from "./superadmin/components/adminSettings/AdminSettings";
import MenuSettingsSuperAdmin from "./superadmin/components/menuSettings/MenuSettings";
import MealEditSuperAdmin from "./superadmin/components/mealEdit/MealEdit";
import MenuSuccessSuperAdmin from "./superadmin/components/menuSuccess/MenuSuccess";
import MealAddSuperAdmin from "./superadmin/components/mealAdd/MealAdd";
import CategoryAddSuperAdmin from "./superadmin/components/categoryAdd/CategoryAdd";

// * Common
import Error404 from "./common/error404/Error404";
import StaffLogin from "./common/staffLogin/staffLogin";

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
    const formattedDate = `${
      today.getDate() < 10 ? "0" + today.getDate() : today.getDate()
    }/${
      today.getMonth() + 1 < 10
        ? "0" + today.getMonth() + 1
        : today.getMonth() + 1
    }/${today.getFullYear()}`;

    const newHistoryEntry = {
      id: Math.floor(1000 + Math.random() * 9000),
      date: formattedDate,
      price: getTotalPrice(cart),
      cart: cart,
    };

    setHistory((prevHistory) => [...prevHistory, newHistoryEntry]);
    setCart([]);
  }

  function handleCartChange(mealId) {
    const existingCartItem = cart.find((item) => item.id === mealId);
    setCart((cart) => {
      if (existingCartItem) {
        return cart.map((item) =>
          item.id === mealId ? { ...item, amount: item.amount + 1 } : item
        );
      } else return [...cart, { id: mealId, amount: 1 }];
    });
  }

  function handleAmountChange(id, amount, sign) {
    setCart((cart) => {
      return cart.map((item) =>
        item.id === id
          ? { ...item, amount: item.amount + (sign ? 1 : -1) }
          : item
      );
    });
    validAmount();
  }

  function validAmount() {
    setCart((cart) => {
      return cart.filter((item) => item.amount > 0);
    });
  }

  return (
    <div className="mt-[70px]">
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          //* User Components
          <Route path="/" element={<CafeUser />} />
          <Route
            path="/menu"
            element={
              <MenuUser cart={cart} handleCartChange={handleCartChange} />
            }
          />
          {isLoggined ? (
            <Route path="/login" element={<ProfileUser history={history} />} />
          ) : (
            <Route path="/login" element={<LoginUser />} />
          )}
          <Route
            path="/cart"
            element={
              <CartUser
                cart={cart}
                handleAmountChange={handleAmountChange}
                handleHistoryAdd={handleHistoryAdd}
                isLoggined={isLoggined}
                RerenderHeader={handleLinkChange}
              />
            }
          />
          <Route path="/order" element={<OrderUser history={history} />} />
          <Route
            path="/success"
            element={
              <SuccessUser cart={cart} handleHistoryAdd={handleHistoryAdd} />
            }
          />
          <Route path="/news" element={<NewsUser />} />
          // * Admin Components
          <Route path="/admin/nav" element={<NavigationAdmin />} />
          <Route path="/admin/login/user" element={<LoginUserAdmin />} />
          <Route path="/admin/register/user" element={<RegisterUserAdmin />} />
          <Route path="/admin/menu" element={<MenuAdmin />} />
          <Route path="/admin/user/cart" element={<CartAdmin />} />
          <Route path="/admin/orders" element={<OrdersAdmin />} />
          //* Super Admin Components
          <Route path="/superadmin/nav" element={<NavigationSuperAdmin />} />
          <Route
            path="/superadmin/admin"
            element={<AdminSettingsSuperAdmin />}
          />
          <Route path="/superadmin/menu" element={<MenuSettingsSuperAdmin />} />
          <Route
            path="/superadmin/menu/edit/meal/*"
            element={<MealEditSuperAdmin />}
          />
          <Route
            path="/superadmin/menu/success"
            element={<MenuSuccessSuperAdmin />}
          />
          <Route
            path="/superadmin/menu/add/meal"
            element={<MealAddSuperAdmin />}
          />
          <Route
            path="/superadmin/menu/add/category"
            element={<CategoryAddSuperAdmin />}
          />
          // * Common
          <Route path="*" element={<Error404 />} />
          <Route path="/admin" element={<StaffLogin />} />
          <Route path="/superadmin" element={<StaffLogin />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}
