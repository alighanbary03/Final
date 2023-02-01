import axios from "axios";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";
import { useState } from "react";

function NewModal(props) {
  const [fruitName, setFruitName] = useState();
  const [url, setUrl] = useState();

  const id = useSelector((state) => state.ui.menu.id);
  useEffect(() => {
    axios.get(`http://localhost:5000/fruits?id=${id}`).then((response) => {
      setFruitName(response.data.name);
      setUrl(response.data.url);
    });
  }, [id]);

  console.log(props.id);
  return (
    <>
      <Modal
        show={props.showModal}
        onHide={() => {
          props.hideDeleteModalHandler();
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={props.body} />
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              props.hideDeleteModalHandler();
            }}
          >
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              props.confirmDeleteHandler();
            }}
          >
            Confirm Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default NewModal;
