import axios from "axios";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import DeleteConfirmation from "../components/shared/DeleteConfirmation";

function Stock() {
  const [allFruits, setAllFruits] = useState([]);
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [itemToDeleteId, setItemToDeleteId] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:5000/fruits").then((response) => {
      setAllFruits(response.data);
    });
  }, []);

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
      .delete(`http://localhost:5000/fruits/${itemToDeleteId}`)
      .then((response) => {
        // response.headers({token});
        setAllFruits((previousState) => {
          return previousState.filter((_) => _.id !== itemToDeleteId);
        });
        setItemToDeleteId(0);
        setShowModal(false);
      });
  };

  return (
    <>
      <DeleteConfirmation
        showModal={showModal}
        hideDeleteModalHandler={hideDeleteModalHandler}
        title="Delete Confirmation"
        body="Are you want delete this itme?"
        confirmDeleteHandler={confirmDeleteHandler}
      ></DeleteConfirmation>
      <Row className="mt-2">
        <Col md={{ span: 4, offset: 4 }}>
          <Button variant="primary" onClick={() => navigate("/add-fruit")}>
            افزودن کالا
          </Button>
          <Button variant="primary" onClick={() => navigate("/orders")}>
            سفارشات
          </Button>
        </Col>
      </Row>
      <Row xs={1} md={3} className="g-5">
        {allFruits.map((item) => (
          <Col key={item.id}>
            <Card style={{ height: 500, width: 400 }}>
              <Card.Img
                variant="top"
                src={item.url}
                style={{ height: 300, width: 200 }}
              />
              <Card.Body style={{ height: 400, width: 300 }}>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>تعداد - {item.quantity}</Card.Text>
                <Card.Text>قیمت - {item.price}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => navigate(`/update-fruit/${item.id}`)}
                >
                  ویرایش
                </Button>
                <Button
                  variant="danger"
                  onClick={() => {
                    openConfirmDeleteModalHandler(item.id);
                  }}
                >
                  پاک کردن
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}
export default Stock;
