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
      <section className="mb-1">
        <MDBNavbar>
          <MDBContainer fluid>
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

        <MDBCollapse show={showAnimated}>
          <div className="bg-light shadow-3 p-4">
            <MDBBtn block className="border-bottom m-0" color="link">
              <NavLink to="/home" className="menu-item">
                Home
              </NavLink>
            </MDBBtn>
            <MDBBtn block className="border-bottom m-0" color="link">
              <NavLink to="/register" className="menu-item">
                ثبت نام
              </NavLink>
            </MDBBtn>
            <MDBBtn block className="border-bottom m-0" color="link">
              <NavLink to="/cardlist" className="menu-item">
                سبد خرید
              </NavLink>
            </MDBBtn>
            <MDBBtn block className="border-bottom m-0" color="link">
              <NavLink to="/login" className="menu-item">
                ورود
              </NavLink>
            </MDBBtn>
            <MDBBtn block className="border-bottom m-0" color="link">
              <NavLink to="/search" className="menu-item">
                جست و جو
              </NavLink>
            </MDBBtn>
            <MDBAccordion flush initialActive={1}>
              <MDBAccordionItem collapseId={1} headerTitle="دسته بندی">
                <div>
                  <NavLink to="/category" className="menu-item">
                    لباس
                  </NavLink>
                </div>
                <div>
                  <NavLink to="/category" className="menu-item">
                    کفش
                  </NavLink>
                </div>
              </MDBAccordionItem>
              <MDBAccordionItem collapseId={2} headerTitle="مدیریت">
                <div>
                  <NavLink to="/admin" className="menu-item">
                    موجودی انبار
                  </NavLink>
                </div>
                <div>
                  <NavLink to="/order-customer" className="menu-item">
                    پیگیری سفارشات
                  </NavLink>
                </div>
                <div>
                  <NavLink to="/orders" className="menu-item">
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
