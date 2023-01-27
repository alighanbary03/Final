import axios from "axios";
import { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function UpdateFruit() {
  const fruitName = useRef("");
  const quantity = useRef("");
  const price = useRef("");
  const url = useRef("");

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/fruits/${id}`).then((response) => {
      fruitName.current.value = response.data.name;
      quantity.current.value = response.data.quantity;
      price.current.value = response.data.price;
      url.current.value = response.data.url;
    });
  }, []);

  const updateFruitHandler = () => {
    var payload = {
      name: fruitName.current.value,
      quantity: quantity.current.value ? Number(quantity.current.value) : 0,
      price: price.current.value ? Number(price.current.value) : 0,
      url: url.current.value,
    };

    axios
      .put(`http://localhost:5000/fruits/${id}`, payload)
      .then((response) => {
        navigate("/admin");
      });
  };

  return (
    <>
      <legend>Update</legend>
      <Form>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>نام محصول</Form.Label>
          <Form.Control type="text" ref={fruitName} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formQuanity">
          <Form.Label>تعداد</Form.Label>
          <Form.Control type="number" ref={quantity} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrice">
          <Form.Label>قیمت</Form.Label>
          <Form.Control type="number" ref={price} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImageUrl">
          <Form.Label>لینک عکس محصول</Form.Label>
          <Form.Control type="text" ref={url} />
        </Form.Group>
        <Button variant="primary" type="button" onClick={updateFruitHandler}>
          به روز رسانی
        </Button>
      </Form>
    </>
  );
}
export default UpdateFruit;
