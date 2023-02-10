import axios from "axios";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cartlist from "../pages/CartlistTable";

import CartlistTable from "../pages/CartlistTable";

function NewModal(props) {
  const [fruitName, setFruitName] = useState();
  const [url, setUrl] = useState();
  const [address, setAddress] = useState();
  const [phone, setPhone] = useState();
  const [orderDate, setOrderDate] = useState();
  const [orders, setOrders] = useState();
  const navigate = useNavigate();

  const id = useSelector((state) => state.ui.menu.id);
  useEffect(() => {
    axios.get(`http://localhost:3001/customers?id=${id}`).then((response) => {
      setFruitName(response.data.name);
      setUrl(response.data.lastname);
      setAddress(response.data.address);
      setPhone(response.data.phone);
      setOrderDate(response.data.orderDate);
    });
  }, [id]);

  const Status = (id) => {
    axios.patch(`http://localhost:3001/customers/${+id}`, {
      status: true,
    });
    alert("بسته تحویل داده شد").then((res) => {
      // setOrderData(res.data);
    });
  };

  console.log(props.id);
  return (
    <div dir="rtl">
      <Modal
        show={props.showModal}
        onHide={() => {
          props.hideDeleteModalHandler();
        }}
      >
        <Modal.Header closeButton>
          <div
            dir="rtl"
            style={{
              position: "absolute",
              right: "50px",
            }}
          >
            <Modal.Title style={{ fontFamily: "BNazanin" }}>
              نام مشتری: {props.title},{props.body}
            </Modal.Title>
          </div>
        </Modal.Header>
        <div dir="rtl" style={{ marginTop: "20px", marginLeft: "100px" }}>
          <Modal.Body style={{ fontFamily: "BNazanin" }}>
            <h2 style={{ marginTop: "20px", fontFamily: "BNazanin" }}>
              آدرس:{props.address}
            </h2>
            <h2 style={{ marginTop: "20px", fontFamily: "BNazanin" }}>
              تلفن:{props.phone}
            </h2>
            <h2 style={{ marginTop: "20px", fontFamily: "BNazanin" }}>
              زمان تحویل:{props.orderDate}
            </h2>
            <h2 style={{ marginTop: "20px", fontFamily: "BNazanin" }}>
              زمان سفارش:{props.currentDate}
            </h2>
          </Modal.Body>
        </div>
        <CartlistTable></CartlistTable>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              props.hideDeleteModalHandler();
            }}
          >
            بستن
          </Button>
          <Button variant="primary" onClick={() => Status(id)}>
            تحویل شد
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default NewModal;
