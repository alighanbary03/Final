import React from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { useState, useEffect } from "react";
// import Layout from "../../components/shared/Layout";

import AllFruits from "../Stock";
import AddFruit from "../AddProduct/AddFruit";
import UpdateFruit from "../UpdateFruit";
// import LayoutCart from "../../components/shared/LayoutCart";
function AdminPanel() {
  return (
    <>
      {/* <Layout>
        <Routes>
          <Route path="/" element={<AllFruits />}></Route>
          <Route path="/add-fruit" element={<AddFruit />}></Route>
          <Route path="/update-fruit/:id" element={<UpdateFruit />}></Route>
        </Routes>
      </Layout> */}
      ;
    </>
  );
}
export default AdminPanel;
