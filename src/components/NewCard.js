import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { modalAction } from "../store/modalslice";
import { useSelector } from "react-redux";
import "../Style/components/NewCard.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NewModal from "./NewModal";

function NewCard() {
  const [fruitName, setFruitName] = useState();
  const [url, setUrl] = useState();

  const id = useSelector((state) => state.ui.menu.id);
  console.log(id);

  useEffect(() => {
    axios.get(`http://localhost:5000/fruits/${Number(id)}`).then((response) => {
      setFruitName(response.data.name);
      setUrl(response.data.url);
    });
  }, [id]);
  const showModal = useSelector((state) => state.ui.menu.show);

  const [allFruits, setAllFruits] = useState([]);
  // const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:3001/users").then((response) => {
      setAllFruits(response.data);
    });
  }, []);
  const openConfirmDeleteModalHandler = (id) => {
    dispatch(modalAction.showMenu(id));

    // setShowModal(true);
  };

  const hideDeleteModalHandler = () => {
    dispatch(modalAction.hideMenu());
  };

  return (
    <>
      <>
        <NewModal
          showModal={showModal}
          hideDeleteModalHandler={hideDeleteModalHandler}
          title={fruitName}
          body={url}
        />
        <Row xs={1} md={3} className="g-5">
          {allFruits.map((item) => (
            <>
              <Col key={item.id} className="g-2">
                <div className="container">
                  <div className="card">
                    <div className="imgBx">
                      <img
                        src={item.imageUrl}
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
                        <h3>تعداد :{item.quantity}</h3>
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

export default NewCard;
