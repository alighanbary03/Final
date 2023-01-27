import React from "react";
import Header from "../../layouts/header/Header";
import Example from "../../components/ImgSlide";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Carousel } from "@trendyol-js/react-carousel";
import { Card } from "../../components/Card";
import { useState, useEffect } from "react";
import data from "../../data/data";
import Grid from "../../components/Gridi.js";
import Routing from "../../Routers/Routing";
import { Modals } from "../../components/Modals";
import { Menubar } from "../../components/Menubar";
import { Cardlist } from "../../components/Cardlist";
import { Pay } from "../../components/Pay";
import { Form } from "../../components/Form";
import { Mainform } from "../../components/MainForm";

import "../../App.css";
import CarouselFadeExample from "../../components/ImgSlide";
import MainGallery from "../../components/MainGallery";
import SliderMain from "../../components/SliderM";

function Home() {
  const [json, setJson] = useState(data.sort((a, b) => a.price - b.price));

  const [filter, setFilter] = useState({
    price: "lowest",
    size: "ALL",
  });

  const [cardlist, setCardlist] = useState([]);

  const [mode, setMode] = useState({
    show: false,
  });

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

  useEffect(() => {
    let arr = [];

    label: for (let i = 0; i < data.length; i++) {
      for (let h = 0; h < data[i].size.length; h++) {
        if (data[i].size[h] === filter.size) {
          arr.push(data[i]);
          continue label;
        }
      }
    }

    if (filter.price === "lowest") {
      setJson(arr.sort((a, b) => a.price - b.price));
    } else {
      setJson(arr.sort((a, b) => b.price - a.price));
    }
  }, [filter]);
  return (
    // Using the newly created Header
    // component in this main component
    <>
      {show.show && (
        <Modals
          show={showModal}
          hide={hideModal}
          datamodal={dataModal}
          cardlist={cardlist}
          setCardlist={setCardlist}
        />
      )}
      <div>
        <SliderMain></SliderMain>
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
        <div className="right">
          <Menubar cardlist={cardlist} />
          {cardlist.map((item) => (
            <Mainform
              key={item.id}
              id={item.id}
              url={item.url}
              description={item.description}
              price={item.price}
              count={item.count}
              cardlist={cardlist}
              setCardlist={setCardlist}
            />
          ))}
        </div>
      </div>
      <div>
        <MainGallery></MainGallery>
      </div>
      {/* <div className="card-section">
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
      </div> */}
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
        <div className="right">
          <Menubar cardlist={cardlist} />
          {cardlist.map((item) => (
            <Mainform
              key={item.id}
              id={item.id}
              url={item.url}
              description={item.description}
              price={item.price}
              count={item.count}
              cardlist={cardlist}
              setCardlist={setCardlist}
            />
          ))}
        </div>
      </div>
    </>
  );
}
export default Home;
