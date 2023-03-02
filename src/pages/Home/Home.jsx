import React from "react";
import Header from "../../layouts/header/Header";
// import Example from "../../components/ImgSlide";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Carousel } from "@trendyol-js/react-carousel";
// import { Card } from "../../components/Card";
import { useState, useEffect } from "react";
import data from "../../data/data";
// import Grid from "../../components/Gridi.js";
import Routing from "../../Routers/Routing";
// import { Modals } from "../../components/Modals";
// import { Menubar } from "../../components/Menubar";
// import { Cardlist } from "../../components/Cardlist";
import { Pay } from "../../components/Pay";
// import { Form } from "../../components/Form";
// import { Mainform } from "../../components/MainForm";

import "../../App.css";
// import CarouselFadeExample from "../../components/ImgSlide";
import MainGallery from "../../components/MainGallery";
import SliderMain from "../../components/SliderM";
import Gallery from "../../components/Gallery";
import NewCard from "../../components/NewCard";
import CatTitleMen from "../../components/CatTitleMen";
import NewCardMen from "../Category/NewCardMen";
import CatTitleW from "../../components/CatTitleW";
import NewCardW from "../Category/NewCardW";
import CatTitleB from "../../components/CardTitleB";
import NewCardS from "../Category/NewCardS";
import NewCardB from "../Category/NewCardB";
import CatTitleSpi from "../../components/CardTitleSpi";
import NewCardSpi from "../Category/NewCardSpi";
import CatTitleS from "../../components/CardTitleS";
import CatTitleF from "../../components/CatTitleF";
import CatTitleWi from "../../components/CatTitleWi";
import NewCardWi from "../Category/NewCardWi";
import NewCardF from "../Category/NewCardF";
import NewCardSpo from "../Category/NewCardSpo";
import CatTitleSpo from "../../components/CatTitleSpor";
import CatTitleRandom from "../../components/CatTitleRandom";

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
    <>
      <div className="z1">
        <SliderMain></SliderMain>
      </div>
      <CatTitleRandom></CatTitleRandom>
      <Gallery></Gallery>

      <NewCardMen></NewCardMen>

      <NewCardW></NewCardW>

      <NewCardB></NewCardB>

      <NewCardSpi></NewCardSpi>

      <NewCardS></NewCardS>

      <NewCardF></NewCardF>

      <NewCardWi></NewCardWi>
      {/* <CatTitleSpo></CatTitleSpo> */}
      <NewCardSpo></NewCardSpo>

      <div>
        <MainGallery></MainGallery>
      </div>
    </>
  );
}
export default Home;
