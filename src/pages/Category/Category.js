import "../../App.css";
// import { Navbar } from "../../components/Navbar";
// import { Card } from "../../components/Card";
import TextField from "@mui/material/TextField";
import data from "../../data/data";
import React, { useState, useEffect, useMemo } from "react";
// import Gridi from "../../components/Gridi";
// import Example from "../../components/ImgSlide";
import Pagination from "../../components/Pagination";
import FinalPagination from "../FinalPagination/FinalPagination";

function Category() {
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
      {/* <Example></Example> */}
      <div className="main">
        <div className="left">
          {/* <Navbar filter={filter} setfilter={setFilter} len={json.length} /> */}
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
        </div>
      </div>
    </>
  );
}

export default Category;
