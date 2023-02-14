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

function Cartlist() {
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
        window.location.reload();
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
          title="پاک کردن از سبد خرید"
          body="آیا مطمئنید میخواهید از سبد خرید حذف کنید؟"
          confirmDeleteHandler={confirmDeleteHandler}
        ></DeleteConfirmation>

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
                عملیات
              </th>
            </tr>
          </thead>
          {allFruits.map((item) => {
            return (
              <>
                <thead>
                  <tr key={item.id}>
                    <th
                      style={{
                        color: "black",
                        borderRadius: "10px",
                        textAlign: "center",
                        fontFamily: "BNazanin",
                        fontWeight: "bold",
                        fontSize: "20px",
                      }}
                    >
                      {item.name}
                    </th>
                    <th
                      style={{
                        color: "black",
                        borderRadius: "10px",
                        textAlign: "center",
                      }}
                    >
                      {item.price}
                    </th>
                    <th
                      style={{
                        color: "black",
                        borderRadius: "10px",
                        borderStyle: "solid",
                        borderColor: "black",
                        textAlign: "center",
                      }}
                    >
                      {item.order}
                    </th>
                    <th
                      style={{
                        color: "black",
                        borderRadius: "5px",
                        textAlign: "center",
                        borderStyle: "solid",
                        borderColor: "black",
                      }}
                    >
                      {item.order * item.price}
                    </th>
                    <th style={{ textAlign: "center" }}>
                      <button
                        style={{
                          width: "200px",
                          borderRadius: "20px",
                          backgroundColor: "red",
                          color: "white",
                          fontWeight: "bold",
                          fontFamily: "BNazanin",
                          fontSize: "25px",
                        }}
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
        <div style={{ display: "flex" }}>
          <h1
            style={{
              padding: "50px",
              marginLeft: "800px",
              fontFamily: "BNazanin",
              fontWeight: "bold",
            }}
          >
            {" "}
            مبلغ کل:{total} تومان
          </h1>

          <button
            onClick={() => navigate(`/form`)}
            href="#"
            style={{
              height: "50px",
              width: "200px",
              borderRadius: "20px",
              backgroundColor: "green",
              color: "white",
              fontWeight: "bold",
              fontFamily: "BNazanin",
              fontSize: "25px",
              marginTop: "50px",
              position: "absolute",
              right: "1100px",
            }}
          >
            {" "}
            نهایی کردن خرید
          </button>
        </div>
        <Row xs={1} md={3} className="g-5">
          {allFruits.map((item) => (
            <>
              <Col key={item.id} className="g-2">
                <div className="container">
                  <div className="card">
                    <div className="imgBx">
                      <img
                        src={item.url}
                        onClick={() => {
                          openConfirmDeleteModalHandler(item.id);
                        }}
                      />
                    </div>

                    <div className="contentBx">
                      <div className="arrow"></div>
                      <div className="des">
                        <h2>{item.name}</h2>
                      </div>
                      <div className="size">
                        <h3>قیمت :{item.price}</h3>
                        {/* <span>7</span>
<span>8</span>
<span>9</span>
<span>10</span> */}
                      </div>
                      <div className="color">
                        <h3>تعداد :{item.order}</h3>
                        {/* <span></span>
<span></span>
<span></span> */}
                      </div>
                      <div className="Butt">
                        <a
                          onClick={() => navigate(`/single/${item.id}`)}
                          href="#"
                        >
                          افزودن به سبد خرید
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </>
          ))}
        </Row>
      </>
    </>
  );
}

export default Cartlist;

export var ptotal;
