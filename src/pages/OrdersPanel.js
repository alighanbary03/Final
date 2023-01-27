import React from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { useState, useEffect } from "react";
import Layout from "../components/shared/Layout";

import AllFruits from "./Orders";
import AddFruit from "./AddProduct/AddFruit";
import UpdateFruit from "./UpdateFruit";
import LayoutOrder from "../components/shared/LayoutOrder";
function OrdersPanel() {
  return (
    <>
      <LayoutOrder>
        <Routes>
          <Route path="/" element={<AllFruits />}></Route>
          <Route path="/add-fruit" element={<AddFruit />}></Route>
          <Route path="/update-fruit/:id" element={<UpdateFruit />}></Route>
        </Routes>
      </LayoutOrder>
      ;
    </>
  );
}
export default OrdersPanel;
