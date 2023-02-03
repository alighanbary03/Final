import React from "react";
import { Navbar } from "../components/Navbar";
import Navcat from "../components/NavCat";
import logo from "../assets/images/logo-img-01.svg";
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

function NewHeader() {
  const navigate = useNavigate();
  return (
    <>
      <header>
        <div className="px-3 py-2 border-bottom mb-3">
          <div className="container d-flex flex-wrap justify-content-center">
            <form className="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto ">
              <input
                type="search"
                className="form-control"
                placeholder="جست و جو"
                aria-label="Search"
              />
            </form>

            <div className="logini">
              <AiOutlineUser
                style={{ fontSize: "30px", color: "black", cursor: "pointer" }}
                onClick={() => navigate("/login")}
              />
              <AiOutlineShopping style={{ fontSize: "30px", color: "black" }} />
              <AiOutlineSearch
                style={{ fontSize: "30px", color: "black", cursor: "pointer" }}
                onClick={() => navigate("/search")}
              />
            </div>
            <div className="title">
              <h1 style={{ fontFamily: "BNazanin" }}>لاکچری لند</h1>
              <img className="brand" src={logo}></img>
            </div>
            <div className="text-end">
              <button type="button" className="btn btn-light text-dark me-2">
                ورود
              </button>
              <button type="button" className="btn btn-primary">
                ثبت نام
              </button>
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
