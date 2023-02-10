import React from "react";

import IMG from "../assets/images/218663.png";

function Unsucess() {
  return (
    <div style={{ marginLeft: "500px", padding: "100px" }}>
      <img style={{ width: "500px", marginRight: "700px" }} src={IMG}></img>
      <h1
        style={{
          marginTop: "100px",
          fontFamily: "BNazanin",
        }}
      >
        پرداخت موفقیت آمیز نبود
      </h1>
    </div>
  );
}

export default Unsucess;
