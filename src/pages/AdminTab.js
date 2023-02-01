import React, { useState } from "react";
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
} from "mdb-react-ui-kit";
import Stock from "./Stock";
import Orders from "./Orders";
import JsonOrders from "./JsonOrders";
import StockDet from "../components/StockDet";
import NewStock from "./NewStock";
import AdminPanelT from "../components/AdminPanelT";

export default function AdminTab() {
  const [basicActive, setBasicActive] = useState("tab1");

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
  };

  return (
    <>
      <AdminPanelT></AdminPanelT>
      <div style={{ marginTop: "5px" }} dir="rtl">
        <MDBTabs className="mb-3">
          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleBasicClick("tab1")}
              active={basicActive === "tab1"}
              style={{
                fontWeight: "bold",
                fontSize: "20px",
                fontFamily: "BNazanin",
              }}
            >
              {" "}
              کالا ها
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleBasicClick("tab2")}
              active={basicActive === "tab2"}
              style={{
                fontWeight: "bold",
                fontSize: "20px",
                fontFamily: "BNazanin",
              }}
            >
              موجودی و قیمت
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleBasicClick("tab3")}
              active={basicActive === "tab3"}
              style={{
                fontWeight: "bold",
                fontSize: "20px",
                fontFamily: "BNazanin",
              }}
            >
              سفارشات
            </MDBTabsLink>
          </MDBTabsItem>
        </MDBTabs>

        <MDBTabsContent>
          <MDBTabsPane show={basicActive === "tab1"}>
            <NewStock></NewStock>
          </MDBTabsPane>
          <MDBTabsPane show={basicActive === "tab2"}>
            <StockDet></StockDet>
          </MDBTabsPane>
          <MDBTabsPane show={basicActive === "tab3"}>
            <JsonOrders></JsonOrders>
          </MDBTabsPane>
        </MDBTabsContent>
      </div>
    </>
  );
}
