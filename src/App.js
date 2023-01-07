import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ImageSlider from "./components/ImageSlider";
import { ImageData } from "./data/Sliderdata";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/Category";
import Contact from "./components/Contact";
import { Carousel } from "@trendyol-js/react-carousel";
import { Card } from "./components/Card";
import { useState, useEffect } from "react";
import data from "./data/data";
import Grid from "./components/Grid.js";
import Routing from "./Routers/Routing";
import Searchbar from "./components/Searchbar";
import FinalPagination from "./components/FinalPagination";

import "./App.css";

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
      <Header />
      <Routing></Routing>
      {/* <Searchbar></Searchbar> */}
      <FinalPagination></FinalPagination>
    </>
  );
}
export default App;
