import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from "mdb-react-ui-kit";

export default function Navcat() {
  const [showBasic, setShowBasic] = useState(false);
  const navigate = useNavigate();

  return (
    <MDBNavbar expand="lg" light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand href="#" style={{ fontFamily: "BNazanin" }}>
          کالکشن ها:
        </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
            <MDBNavbarItem>
              <MDBNavbarLink
                active
                aria-current="page"
                href="#"
                style={{ fontFamily: "BNazanin" }}
                onClick={() => navigate("/fall")}
              >
                پاییزه
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink
                style={{ fontFamily: "BNazanin" }}
                href="#"
                onClick={() => navigate("/winter")}
              >
                زمستانه
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink
                style={{ fontFamily: "BNazanin" }}
                href="#"
                onClick={() => navigate("/bahar")}
              >
                بهاره
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink
                style={{ fontFamily: "BNazanin" }}
                href="#"
                onClick={() => navigate("/women")}
              >
                زنانه
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink
                style={{ fontFamily: "BNazanin" }}
                href="#"
                onClick={() => navigate("/men")}
              >
                مردانه
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink
                style={{ fontFamily: "BNazanin" }}
                href="#"
                onClick={() => navigate("/summer")}
              >
                تابستانه
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink
                style={{ fontFamily: "BNazanin" }}
                onClick={() => navigate("/baby")}
                href="#"
              >
                بچگانه
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink
                style={{ fontFamily: "BNazanin" }}
                onClick={() => navigate("/sport")}
                href="#"
              >
                اسپرت
              </MDBNavbarLink>
            </MDBNavbarItem>

            {/* <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag="a" className="nav-link" role="button">
                  Dropdown
                </MDBDropdownToggle> 
                 <MDBDropdownMenu>
                  <MDBDropdownItem link>Action</MDBDropdownItem>
                  <MDBDropdownItem link>Another action</MDBDropdownItem>
                  <MDBDropdownItem link>Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem> */}
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
