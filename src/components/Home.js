import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ImageSlider from "./ImageSlider";
import { ImageData } from "../data/Sliderdata";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Carousel } from "@trendyol-js/react-carousel";
import { Card } from "./Card";
import { useState, useEffect } from "react";
import data from "../data/data";
import Grid from "./Grid.js";
import Routing from "../Routers/Routing";

import "../App.css";

function Home() {
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
    // Using the newly created Header
    // component in this main component
    <>
      // Using the newly created Header // component in this main component
      <Header />
      <ImageSlider ImageData={ImageData} />
      <Routing></Routing>
      <div className="card-section">
        {json.map((item, index) => (
          <Card
            key={item.id}
            id={item.id}
            url={item.url}
            description={item.description}
            price={item.price}
            cardlist={cardlist}
            setCardlist={setCardlist}
            show={showModal}
            hide={hideModal}
            datamodal={dataModal}
            setdatamodal={setDataModal}
          />
        ))}
      </div>
      <div className="Grid">
        <Grid></Grid>
      </div>
      <div className="card-section">
        {json.map((item, index) => (
          <Card
            key={item.id}
            id={item.id}
            url={item.url}
            description={item.description}
            price={item.price}
            cardlist={cardlist}
            setCardlist={setCardlist}
            show={showModal}
            hide={hideModal}
            datamodal={dataModal}
            setdatamodal={setDataModal}
          />
        ))}
      </div>
      <div className="card-section">
        {json.map((item, index) => (
          <Card
            key={item.id}
            id={item.id}
            url={item.url}
            description={item.description}
            price={item.price}
            cardlist={cardlist}
            setCardlist={setCardlist}
            show={showModal}
            hide={hideModal}
            datamodal={dataModal}
            setdatamodal={setDataModal}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}
export default Home;
