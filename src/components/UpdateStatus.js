import axios from "axios";
import { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function UpdateStatus() {
  const fruitName = useRef("");
  const quantity = useRef("");
  const price = useRef("");
  const url = useRef("");

  const status = useRef("");

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3001/customers/${id}`).then((response) => {
      fruitName.current.value = response.data.name;
      quantity.current.value = response.data.quantity;
      price.current.value = response.data.price;
      url.current.value = response.data.url;
      status.current.value = response.data.status;
    });
  }, []);

  const updateFruitHandler = () => {
    var payload = {
      name: fruitName.current.value,
      quantity: quantity.current.value ? Number(quantity.current.value) : 0,
      price: price.current.value ? Number(price.current.value) : 0,
      url: url.current.value,
      status: status.current.value,
    };

    axios
      .put(`http://localhost:3001/customers/${id}`, payload)
      .then((response) => {
        navigate("/admin-tab");
      });
  };

  return (
    <>
      <legend>Update</legend>
      <Form>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>تایپ کنید تحویل شد</Form.Label>
          <Form.Control type="text" ref={status} />
        </Form.Group>
        <Button variant="primary" type="button" onClick={updateFruitHandler}>
          به روز رسانی
        </Button>
      </Form>
    </>
  );
}
export default UpdateStatus;
