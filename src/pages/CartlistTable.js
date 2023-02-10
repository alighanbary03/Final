import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { modalAction } from "../store/modalslice";
import { useSelector } from "react-redux";
import "../Style/pages/Cartlist.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DeleteConfirmation from "../components/shared/DeleteConfirmation";

// import NewModal from "./NewModal";

function CartlistTable() {
  const [fruitName, setFruitName] = useState();
  const [url, setUrl] = useState();

  const [showModal, setShowModal] = useState(false);
  const [itemToDeleteId, setItemToDeleteId] = useState(0);

  const [total, setTotal] = useState(0);

  const id = useSelector((state) => state.ui.menu.id);
  console.log(id);
  useEffect(() => {
    axios.get(`http://localhost:5000/fruits/${Number(id)}`).then((response) => {
      setFruitName(response.data.name);
      setUrl(response.data.url);
    });
  }, [id]);

  const openConfirmDeleteModalHandler = (id) => {
    setShowModal(true);
    setItemToDeleteId(id);
  };

  const hideDeleteModalHandler = () => {
    setShowModal(false);
    setItemToDeleteId(0);
  };

  const confirmDeleteHandler = () => {
    axios
      .delete(`http://localhost:3001/Cartlist/${itemToDeleteId}`)
      .then((response) => {
        setAllFruits((previousState) => {
          return previousState.filter((_) => _.id !== itemToDeleteId);
        });
        setItemToDeleteId(0);
        setShowModal(false);
      });
  };
  // const showModal = useSelector((state) => state.ui.menu.show);

  const [allFruits, setAllFruits] = useState([]);
  // const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:3001/Cartlist").then((response) => {
      setAllFruits(response.data);
    });
  }, []);
  useEffect(() => {
    const total = allFruits.reduce((acc, current) => {
      return acc + current.price * current.order;
    }, 0);
    setTotal(total);
    localStorage.setItem("total", total);
  }, [allFruits]);
  return (
    <>
      <>
        {/* <NewModal
          showModal={showModal}
          hideDeleteModalHandler={hideDeleteModalHandler}
          title={fruitName}
          body={url}
        /> */}
        <DeleteConfirmation
          showModal={showModal}
          hideDeleteModalHandler={hideDeleteModalHandler}
          title="Delete Confirmation"
          body="Are you want delete this itme?"
          confirmDeleteHandler={confirmDeleteHandler}
        ></DeleteConfirmation>
        {/* <h1>{total}</h1> */}
        <table className="styled-table">
          <thead>
            <tr>
              <th
                style={{
                  color: "white",
                  backgroundColor: "black",
                  borderColor: "white",
                  borderStyle: "solid",
                  border: "solid",
                  borderRadius: "10px",
                  fontFamily: "BNazanin",
                  fontWeight: "bold",
                  fontSize: "20px",
                  textAlign: "center",
                }}
              >
                نام محصول
              </th>
              <th
                style={{
                  color: "white",
                  backgroundColor: "black",
                  borderColor: "white",
                  borderStyle: "solid",
                  border: "solid",
                  borderRadius: "10px",
                  fontFamily: "BNazanin",
                  fontWeight: "bold",
                  fontSize: "20px",
                  textAlign: "center",
                }}
              >
                قیمت
              </th>
              <th
                style={{
                  color: "white",
                  backgroundColor: "black",
                  borderColor: "white",
                  borderStyle: "solid",
                  border: "solid",
                  borderRadius: "10px",
                  fontFamily: "BNazanin",
                  fontWeight: "bold",
                  fontSize: "20px",
                  textAlign: "center",
                }}
              >
                تعداد
              </th>
              <th
                style={{
                  color: "white",
                  backgroundColor: "black",
                  borderColor: "white",
                  borderStyle: "solid",
                  border: "solid",
                  borderRadius: "10px",
                  fontFamily: "BNazanin",
                  fontWeight: "bold",
                  fontSize: "20px",
                  textAlign: "center",
                }}
              >
                قیمت کل
              </th>
            </tr>
          </thead>
          {allFruits.map((item) => {
            return (
              <>
                <thead>
                  <tr key={item.id}>
                    <th style={{ color: "black" }}>{item.name}</th>
                    <th style={{ color: "black" }}>{item.price}</th>
                    <th style={{ color: "black" }}>{item.order}</th>
                    <th style={{ color: "black" }}>
                      {item.order * item.price}
                    </th>
                    <th>
                      <button
                        onClick={() => {
                          openConfirmDeleteModalHandler(item.id);
                        }}
                      >
                        حذف
                      </button>
                    </th>
                  </tr>
                </thead>
              </>
            );
          })}
        </table>
      </>
    </>
  );
}

export default CartlistTable;
