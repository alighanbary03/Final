import React, { useState } from "react";
import {
  MDBContainer,
  MDBCollapse,
  MDBNavbar,
  MDBNavbarToggler,
  MDBIcon,
  MDBBtn,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
  MDBAccordion,
  MDBAccordionItem,
} from "mdb-react-ui-kit";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

import "../Style/components/MainSidebar.css";
export default function MainSidebar() {
  const [showAnimated, setShowAnimated] = useState(false);
  const [showAnimated2, setShowAnimated2] = useState(false);
  const [showAnimated3, setShowAnimated3] = useState(false);

  return (
    <>
      <section style={{ borderRadius: "50px" }} className="mb-1 cont">
        <MDBNavbar style={{ borderRadius: "50px" }}>
          <MDBContainer fluid>
            <p
              className="mti"
              style={{ color: "black", fontFamily: "BNazanin" }}
            >
              نقشه سایت
            </p>
            <MDBNavbarToggler
              type="button"
              className="first-button"
              data-target="#navbarToggleExternalContent"
              aria-controls="navbarToggleExternalContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShowAnimated(!showAnimated)}
            >
              <div className={`animated-icon1 ${showAnimated && "open"}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </MDBNavbarToggler>
          </MDBContainer>
        </MDBNavbar>

        <MDBCollapse show={showAnimated} style={{ borderRadius: "50px" }}>
          <div
            className="bg-light shadow-3 p-4"
            style={{ borderRadius: "50px" }}
          >
            <MDBBtn block className="border-bottom m-0" color="link">
              <NavLink
                to="/"
                className="menu-item"
                dir="rtl"
                style={{ fontFamily: "BNazanin" }}
              >
                خانه
              </NavLink>
            </MDBBtn>
            <MDBBtn block className="border-bottom m-0" color="link">
              <NavLink
                to="/register"
                className="menu-item"
                dir="rtl"
                style={{ fontFamily: "BNazanin" }}
              >
                ثبت نام
              </NavLink>
            </MDBBtn>
            <MDBBtn block className="border-bottom m-0" color="link">
              <NavLink
                to="/cardlist"
                className="menu-item"
                dir="rtl"
                style={{ fontFamily: "BNazanin" }}
              >
                سبد خرید
              </NavLink>
            </MDBBtn>
            <MDBBtn block className="border-bottom m-0" color="link">
              <NavLink
                to="/login"
                className="menu-item"
                dir="rtl"
                style={{ fontFamily: "BNazanin" }}
              >
                ورود
              </NavLink>
            </MDBBtn>
            <MDBBtn block className="border-bottom m-0" color="link">
              <NavLink
                to="/search"
                className="menu-item"
                dir="rtl"
                style={{ fontFamily: "BNazanin" }}
              >
                جست و جو
              </NavLink>
            </MDBBtn>
            <MDBAccordion flush initialActive={1}>
              <MDBAccordionItem collapseId={1} headerTitle="زیرگروه ها">
                <div>
                  <NavLink
                    to="/lebas"
                    className="menu-item"
                    dir="rtl"
                    style={{ fontFamily: "BNazanin" }}
                  >
                    لباس
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    to="/kafsh"
                    className="menu-item"
                    dir="rtl"
                    style={{ fontFamily: "BNazanin" }}
                  >
                    کفش
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    to="/accessory"
                    className="menu-item"
                    dir="rtl"
                    style={{ fontFamily: "BNazanin" }}
                  >
                    اکسسوری
                  </NavLink>
                </div>
              </MDBAccordionItem>
              <MDBAccordionItem
                collapseId={2}
                headerTitle="مدیریت"
                dir="rtl"
                style={{ fontFamily: "BNazanin" }}
              >
                <div>
                  <NavLink
                    to="/admin"
                    className="menu-item"
                    dir="rtl"
                    style={{ fontFamily: "BNazanin" }}
                  >
                    موجودی انبار
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    to="/order-customer"
                    className="menu-item"
                    dir="rtl"
                    style={{ fontFamily: "BNazanin" }}
                  >
                    پیگیری سفارشات
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    to="/orders"
                    className="menu-item"
                    dir="rtl"
                    style={{ fontFamily: "BNazanin" }}
                  >
                    سفارشات
                  </NavLink>
                </div>
              </MDBAccordionItem>
            </MDBAccordion>
          </div>
        </MDBCollapse>
      </section>
    </>
  );
}
