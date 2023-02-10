import React from "react";

import IMG from "../assets/images/payment_success_icon.png";

function Sucess() {
  return (
    <div style={{ marginLeft: "500px", padding: "100px" }}>
      <img style={{ width: "500px", marginRight: "700px" }} src={IMG}></img>
      <h1
        style={{
          // marginLeft: "-80px",
          marginTop: "100px",
          fontFamily: "BNazanin",
        }}
      >
        پرداخت موفقیت آمیز بود
      </h1>
    </div>
  );
}

export default Sucess;
