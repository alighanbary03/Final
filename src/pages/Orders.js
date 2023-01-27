import axios from "axios";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import DeleteConfirmation from "../components/shared/DeleteConfirmation";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "../App.css";

function Orders() {
  const [allFruits, setAllFruits] = useState([]);
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [itemToDeleteId, setItemToDeleteId] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:4000/fruits2").then((response) => {
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
      .delete(`http://localhost:4000/fruits2/${itemToDeleteId}`)
      .then((response) => {
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
      <div className="main">
        <Navbar expand="lg" variant="dark" bg="success">
          <Container>
            <Navbar.Brand>سفارشات</Navbar.Brand>
          </Container>
        </Navbar>
        <Row className="mt-2">
          <Col md={{ span: 4, offset: 4 }}>
            {/* <Button variant="primary" onClick={() => navigate("/add-fruit")}>
            Add New Fruit
          </Button> */}
          </Col>
        </Row>
        <Row xs={1} md={3} className="g-2">
          {allFruits.map((item) => (
            <Col key={item.id}>
              <Card>
                <Card.Img
                  variant="top"
                  src={item.url}
                  style={{ height: 300 }}
                />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text> تعداد {item.quantity}</Card.Text>
                  <Card.Text>Price - {item.price}</Card.Text>
                  <Card.Text>Price - {item.Address}</Card.Text>
                  <Button
                    variant="danger"
                    onClick={() => {
                      openConfirmDeleteModalHandler(item.id);
                    }}
                  >
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}
export default Orders;
