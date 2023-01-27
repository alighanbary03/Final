import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "../../App.css";

function LayoutOrder(props) {
  return (
    <div className="main">
      <Navbar expand="lg" variant="dark" bg="success">
        <Container>
          <Navbar.Brand>سفارشات</Navbar.Brand>
        </Container>
      </Navbar>
      <Container>{props.children}</Container>
    </div>
  );
}
export default LayoutOrder;
