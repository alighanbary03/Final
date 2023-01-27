import React from "react";
import "../Style/components/Card.css";
import axios from "axios";

export const Card = ({
  id,
  url,
  description,
  price,
  cardlist,
  setCardlist,
  show,
  hide,
  datamodal,
  setdatamodal,
}) => {
  function add() {
    let item = cardlist.find((i) => i.id === id);
    if (item) {
      let arr = [...cardlist];
      let index = arr.findIndex((i) => i.id === id);
      arr[index].count++;
      setCardlist(arr);
    } else {
      setCardlist([
        ...cardlist,
        { id: id, url: url, description: description, price: price, count: 1 },
      ]);
    }
  }
  const addFruitHandler = () => {
    var payload = {
      name: description,
      price: price ? Number(price) : 0,
      url: url,
    };
    axios.post("http://localhost:4000/fruits", payload).then(() => {});
    alert("سبد خرید خود را چک کنید");
  };

  function showm() {
    let index = cardlist.findIndex((i) => i.id === id);
    setdatamodal({
      url: url,
      id: id,
      title: description,
      des: "This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.",
      price: price,
    });
    show();
  }

  function remove() {
    let index = cardlist.findIndex((item, index) => item.id === id);
    let arr = [...cardlist];
    if (arr[index].count === 1) {
      arr.splice(index, 1);
    } else {
      arr[index].count--;
    }

    setCardlist(arr);
  }
  return (
    <div className="card">
      <div className="brad">
        <img src={url} className="card-img" onClick={() => showm()} />
      </div>
      <h1 className="des">{description}</h1>
      <div dir="rtl">
        <h2 className="price">{price}هزار تومان</h2>
      </div>
      <div className="addToCard">
        <button onClick={remove}>-</button>
        <button onClick={addFruitHandler}>افزودن به سبد خرید</button>
        <button onClick={add}>+</button>
      </div>
    </div>
  );
};
