import React from "react";
import { slide as Menu } from "react-burger-menu";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/Category/Category";
import "../Style/Sidebar.css";

export default (props) => {
  return (
    <Menu>
      <NavLink to="/" className="menu-item">
        Home
      </NavLink>
      <NavLink to="/category" className="menu-item">
        لباس
      </NavLink>
      <NavLink to="/search" className="menu-item">
        جست و جو
      </NavLink>
      <NavLink to="/all" className="menu-item">
        همه محصولات
      </NavLink>
      <NavLink to="/register" className="menu-item">
        ثبت نام
      </NavLink>
      <NavLink to="/login" className="menu-item">
        ورود
      </NavLink>
      <NavLink to="/cartlist" className="menu-item">
        سبد خرید
      </NavLink>
      <NavLink to="/admin" className="menu-item">
        مدیریت
      </NavLink>
      <NavLink to="/orders" className="menu-item">
        سفارشات
      </NavLink>
      <NavLink to="/order-customer" className="menu-item">
        پیگیری سفارشات
      </NavLink>
    </Menu>
  );
};
