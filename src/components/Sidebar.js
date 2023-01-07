import React from "react";
import { slide as Menu } from "react-burger-menu";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import Home from "./Home";
import About from "./Category";
import Contact from "./Contact";
import "../Style/Sidebar.css";

export default (props) => {
  return (
    <Menu>
      <NavLink to="/home" className="menu-item">
        Home
      </NavLink>
      <NavLink to="/category" className="menu-item">
        لباس
      </NavLink>
      <a className="menu-item" href="/pizzas">
        Pizzas
      </a>
      <a className="menu-item" href="/desserts">
        Desserts
      </a>
    </Menu>
  );
};
