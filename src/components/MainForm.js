import React from "react";
import "../Style/components/Cardlist.css";
import { Form } from "./Form";
import axios from "axios";
import { useRef } from "react";

export const Mainform = ({
  id,
  url,
  description,
  price,
  count,
  cardlist,
  setCardlist,
}) => {
  const fruitName = useRef("");
  const Address = useRef("");
  const email = useRef("");
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
  let total = 0;
  cardlist.forEach((element) => {
    total += element.price * element.count;
  });

  const addFruitHandler = () => {
    var payload = {
      name: fruitName.current.value,
      quantity: count ? Number(count) : 0,
      price: price ? Number(price) : 0,
      url: url,
      email: email.current.value,
      Address: Address.current.value,

      // quantity: count ? Number(count) : 0,
      // price: total ? Number(total) : 0,
      // url: url.current.value,
    };
    axios.post("http://localhost:4000/fruits2", payload).then(() => {
      alert("خرید مستقیم انجام شد");
    });
  };

  return (
    <>
      <div className="card-list">
        <div className="list-card-chooiced">
          <div className="img">
            <img
              src={url}
              style={{ width: "50px", marginRight: "20px" }}
              alt=""
            />
          </div>
          <div className="detail">
            <p>{description}</p>
            <div className="count">
              <p>
                هزارتومان {price} x {count}
              </p>
              <button onClick={remove}>پاک کردن</button>
            </div>
          </div>
        </div>
      </div>
      <form>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" ref={email} />

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
    </>
  );
};
