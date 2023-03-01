import React from "react";
import { Navbar } from "../components/Navbar";
import Navcat from "../components/NavCat";
import logo from "../assets/images/logo-img-01.svg";
// import logo2 from "../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import {
  AiOutlineUser,
  AiOutlineShopping,
  AiOutlineSearch,
} from "react-icons/ai";
import AppBar from "@mui/material/AppBar";

import "../Style/layouts/NewHeader.css";
import MainSidebar from "../components/MainSidebar";
import { borderRadius } from "@mui/system";
import CustomizedBadges from "../components/CartlistBadge";

function NewHeader() {
  const navigate = useNavigate();
  return (
    <>
      <header>
        <div
          className="px-3 py-2 border-bottom mb-3"
          style={{ marginLeft: "300px" }}
        >
          <div className="container d-flex flex-wrap justify-content-center">
            <div className="logini">
              <AiOutlineUser
                style={{ fontSize: "30px", color: "black", cursor: "pointer" }}
                onClick={() => navigate("/login")}
              />
              <div onClick={() => navigate("/cartlist")}>
                <CustomizedBadges />
              </div>
              {/* 
              <AiOutlineSearch
                style={{
                  fontSize: "30px",
                  color: "black",
                  cursor: "pointer",
                  marginLeft: "10px",
                }}
                onClick={() => navigate("/search")}
              /> */}
            </div>
            <div className="title">
              {/* <img
                className="brand"
                style={{ borderRadius: "50px", height: "200px" }}
                src={logo2}
              ></img> */}
              <h1 style={{ fontFamily: "BNazanin", fontWeight: "bold" }}>
                لاکچری لند
              </h1>
              <img className="brand" src={logo}></img>
            </div>
            <div className="text-end">
              <AiOutlineSearch
                style={{
                  fontSize: "30px",
                  color: "black",
                  cursor: "pointer",
                  marginLeft: "10px",
                  marginTop: "20px",
                }}
                onClick={() => navigate("/search")}
              />
              {/* <button type="button" className="btn btn-light text-dark me-2">
                ورود
              </button>
              <button type="button" className="btn btn-primary">
                ثبت نام
              </button> */}
            </div>
          </div>
        </div>
      </header>
      <div dir="rtl">
        <Navcat></Navcat>
      </div>
      <AppBar
        sx={{
          bgcolor: "white",
          width: "200px",
          borderRadius: "50px",
          marginTop: "20px",
        }}
      >
        <div dir="rtl">
          <MainSidebar></MainSidebar>
        </div>
      </AppBar>
    </>
  );
}

export default NewHeader;
