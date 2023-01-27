import axios from "axios";
import { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

function AddFruit() {
  const fruitName = useRef("");
  const quantity = useRef("");
  const price = useRef("");
  const url = useRef("");

  const navigate = useNavigate();

  const addFruitHandler = () => {
    var payload = {
      name: fruitName.current.value,
      quantity: quantity.current.value ? Number(quantity.current.value) : 0,
      price: price.current.value ? Number(price.current.value) : 0,
      url: url.current.value,
    };
    axios.post("http://localhost:5000/fruits", payload).then(() => {
      navigate("/admin");
    });
  };
  return (
    <>
      <legend>Create</legend>
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
        <Button variant="primary" type="button" onClick={addFruitHandler}>
          افزودن
        </Button>
      </Form>
    </>
  );
}
export default AddFruit;
