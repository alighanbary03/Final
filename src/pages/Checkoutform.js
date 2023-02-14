import React, { useEffect, useState } from "react";
import "../Style/Checkoutform.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useRef } from "react";
import { DatePicker } from "@kasraghoreyshi/datepicker";
import "@kasraghoreyshi/calendar/styles.css";
import "@kasraghoreyshi/datepicker/styles.css";
import { ptotal } from "./Cartlist";

function Checkoutform() {
  const fruitName = useRef("");
  const lastname = useRef("");
  const address = useRef("");
  const phone = useRef("");
  const orderDate = useRef("");
  // const [orderDate, setOrderDate] = useState();
  const total = useRef("");
  const status = useRef(false);
  const [orders, setOrders] = useState([]);

  const [ptotal, setPtotal] = useState("");

  useEffect(() => {
    setPtotal(localStorage.getItem("total"));
  }, [localStorage.getItem("total")]);

  const getDate = () => {
    let today = new Date();
    let dd = String(today.getDate());
    let mm = String(today.getMonth());
    let yyyy = today.getFullYear();

    // today = mm + "/" + dd + "/" + yyyy;
    today = today.toLocaleDateString("fa-IR");
    console.log(today);

    return today;
  };

  const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

  // const fars = () => {
  //   today.toLocaleDateString("fa-IR");

  // };

  const [currentDate, setCurrentDate] = useState(getDate);

  // setCurrentDate = getDate();

  const navigate = useNavigate();

  // const currentDate = getDate();

  useEffect(() => {
    axios.get("http://localhost:3001/Cartlist").then((response) => {
      setOrders(response.data);
    });
  }, []);

  const addFruitHandler = () => {
    var payload = {
      name: fruitName.current.value,
      lastname: lastname.current.value,
      address: address.current.value,
      phone: phone.current.value,
      orderDate: orderDate.current.value,
      currentDate: currentDate,
      status: status.current,
      orders: orders,
      total: total.current.value,
    };

    axios.post("http://localhost:3001/customers", payload).then(() => {
      addToCart();
      navigate("/Payment");
    });
    console.log(date.toLocaleDateString("fa-IR"));
  };

  const addToCart = (id) => {
    axios.patch(`http://localhost:3001/customers/${+id}`, {
      orders: orders,
    });
  };

  return (
    <div dir="rtl" style={{ textAlign: "right", padding: "50px" }}>
      <div
        style={{ marginBottom: "20px", padding: "20px", textAlign: "center" }}
      >
        <h2 style={{ fontFamily: "BNazanin", fontWeight: "bold" }}>
          نهایی کردن خرید
        </h2>
      </div>
      <div className="row">
        <div className="col-75">
          <div className="containerr">
            <form>
              <div className="row">
                <div className="col-50">
                  {/* <h3>Billing Address</h3> */}
                  <label for="fname">نام</label>
                  <input
                    type="text"
                    id="fname"
                    name="firstname"
                    placeholder="نام"
                    ref={fruitName}
                  />
                  <label for="email">نام خانوادگی</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="نام خانوادگی"
                    ref={lastname}
                  />
                  <label for="adr">
                    <i className="fa fa-address-card-o"></i>آدرس
                  </label>
                  <input
                    type="text"
                    id="adr"
                    name="address"
                    placeholder="آدرس"
                    ref={address}
                  />
                  <label for="city">
                    <i className="fa fa-institution"></i> تاریخ تحویل
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="1401/12/6"
                    style={{ display: "inline-block" }}
                    ref={orderDate}
                  />
                  <label for="city">
                    <i className="fa fa-institution"></i> شماره تلفن
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="شماره تلفن"
                    ref={phone}
                  />
                  <label for="city">مبلغ کل</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={ptotal}
                    ref={total}
                  />
                </div>
              </div>
              <input
                style={{
                  fontFamily: "BNazanin",
                  backgroundColor: "green",
                  fontWeight: "bold",
                  color: "white",
                  fontSize: "20px",
                }}
                value="پرداخت"
                class="btn"
                onClick={addFruitHandler}
              ></input>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkoutform;
