import React, { useState } from "react";
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

  const confirmDeleteHandler = () => {
    axios.delete(`http://localhost:3001/customers/4`);
    navigate(`/unsucess`);
  };

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
          onClick={() => navigate(`/sucess`)}
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
