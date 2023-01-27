import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useRef } from "react";
import "../Style/components/Form.css";

export const Form = ({ price }) => {
  const fruitName = useRef("");
  const quantity = useRef("");
  const Address = useRef("");
  const url = useRef("");

  const addFruitHandler = () => {
    var payload = {
      name: fruitName.current.value,
      // quantity: count ? Number(count) : 0,
      // price: total ? Number(total) : 0,
      url: url.current.value,
    };
    axios.post("http://localhost:4000/fruits2", payload).then(() => {
      alert("خرید مستقیم انجام شد");
    });
  };
  function submit(e) {
    e.preventDefault();
    alert("Will be sent!");
  }

  return (
    <form>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" />

      <label htmlFor="name">Name</label>
      <input type="text" id="name" ref={fruitName} />

      <label htmlFor="Address">Address</label>
      <input type="text" id="Address" ref={Address} />

      <input
        type="button"
        className="btn"
        onClick={addFruitHandler}
        value="پرداخت"
      />
    </form>
  );
};
