import React from "react";
import Header from "./layouts/header/Header";
import Footer from "./layouts/footer/Footer";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/Category/Category";
import { Carousel } from "@trendyol-js/react-carousel";
import { Card } from "./components/Card";
import { useState, useEffect } from "react";
import data from "./data/data";
import Grid from "./components/Gridi.js";
import Routing from "./Routers/Routing";
import Searchbar from "./pages/Searchbar";
import FinalPagination from "./pages/FinalPagination/FinalPagination";
import Layout from "./components/shared/Layout";
import "./App.css";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Example from "./components/ImgSlide";
import AllFruits from "./pages/AllFruits";
import AddFruit from "./pages/AddProduct/AddFruit";
import UpdateFruit from "./pages/UpdateFruit";
import PaginatedItems from "./components/MainPaginate";
import MainPaginate from "./components/MainPaginate";
import JsonOrders from "./pages/JsonOrders";
import MainGallery from "./components/MainGallery";
import MainSidebar from "./components/MainSidebar";
import SliderMain from "./components/SliderM";
import Navcat from "./components/NavCat";
import MultipleItems from "./components/MultiCard";
function App() {
  const [json, setJson] = useState(data.sort((a, b) => a.price - b.price));
  const [cardlist, setCardlist] = useState([]);
  const [show, setShow] = useState({
    show: false,
  });
  let showModal = () => {
    setShow({
      show: true,
    });
  };
  let hideModal = () => {
    setShow({
      show: false,
    });
  };
  const [dataModal, setDataModal] = useState({
    url: "",
    id: "",
    title: "",
    des: "",
    price: "",
    sizes: [],
  });
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="main">
        <Routing></Routing>
      </div>
      <Footer />

      {/* <MultipleItems></MultipleItems> */}

      {/* <SliderMain></SliderMain> */}
      {/* <JsonOrders></JsonOrders> */}
      {/* <MainGallery></MainGallery> */}
    </>
  );
}
export default App;
