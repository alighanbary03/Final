import React, { useState, useEffect } from "react";
import IMG from "../assets/images/IPG-Report981123.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Payment() {
  const navigate = useNavigate();

  // let customers = [];
  // const [customers, SetCustomers] = useState([]);

  // axios.get(`http://localhost:3001/customers`).then((resp) => {
  //   SetCustomers(resp.data);
  // });

  const [orders, setOrders] = useState([]);

  const [customers, SetCustomers] = useState([]);

  const [itemToDeleteId, setItemToDeleteId] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/Customers").then((response) => {
      SetCustomers(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:3001/Cartlist").then((response) => {
      setOrders(response.data);
    });
  }, []);

  const confirmDeleteHandler = () => {
    axios
      .delete(`http://localhost:3001/Customers/${customers.length}`)
      .then((response) => {
        SetCustomers(response.data);
      });
    navigate(`/unsucess`);
  };

  const confirmDeleteHandlerCartlist = () => {
    for (let index = 1; index <= orders.length; index++) {
      axios
        .delete(`http://localhost:3001/Cartlist/${index}`)
        .then((response) => {
          setOrders(response.data);
        });
    }

    navigate(`/sucess`);
    window.location.reload();
  };

  // const confirmDeleteHandlerCartlist = () => {
  //   for (const element in orders) {
  //     axios
  //       .delete(`http://localhost:3001/Cartlist/${element}`)
  //       .then((response) => {
  //         setOrders(response.data);
  //       });
  //   }
  //   navigate(`/unsucess`);
  // };

  return (
    <div
      style={{ display: "inline-block", marginLeft: "400px", padding: "50px" }}
    >
      <img src={IMG}></img>
      <div
        style={{
          display: "flex",
          gap: "50px",
          position: "absolute",
          left: "700px",
        }}
      >
        <button
          style={{
            backgroundColor: "green",
            fontFamily: "BNazanin",
            color: "white",
            width: "100px",
          }}
          onClick={confirmDeleteHandlerCartlist}
        >
          {" "}
          پرداخت
        </button>
        <button
          style={{
            backgroundColor: "red",
            fontFamily: "BNazanin",
            color: "white",
            width: "100px",
          }}
          onClick={confirmDeleteHandler}
        >
          انصراف
        </button>
      </div>
    </div>
  );
}

export default Payment;
