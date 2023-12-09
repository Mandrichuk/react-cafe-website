import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearAdminCart } from "../../../features/carts";
import { useSelector } from "react-redux";
import menuData from "../../../data/menuData";
import MenuItem from "./materials/MenuItem";
import styles from "./menu.module.css";
import Header from "../header/Header";


export default function CreateMenu() {
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.carts.value);

  return (
    <main className={`w-full flex flex-col items-center justify-center`}>
      <Header />
      <div className="staffContent">
        <div
          className={`${styles.btnsContainer} flex flex-row items-center justify-between `}
        >
          <Link
            to="/admin/nav"
            onClick={() => {
              dispatch(clearAdminCart());
            }}
            className={`btn ${styles.redBtn} flex-1 flex flex-col items-center`}
          >
            Скасувати <span>замовлення</span>
          </Link>
          <Link
            to="/admin/user/cart"
            className={`btn ${styles.grayBtn} mx-5 flex-1 flex flex-col items-center`}
          >
            Кошик&nbsp;<span>(PRICE)</span>
          </Link>
          <Link
            to="/admin/orders"
            className={`btn flex-1 flex flex-col items-center`}
          >
            Підтвердити <span>замовлення</span>
          </Link>
        </div>

        <ul className={`${styles.accordion}`}>
          {menuData.map((item) => (
            <MenuItem key={item.id} {...item} />
          ))}
        </ul>
      </div>
    </main>
  );
}
