import { display, getStyleValue } from "@mui/system";
import axios from "axios";
import TextField from "@mui/material/TextField";
import React, { useState, useEffect } from "react";
// import "../App.css";
import "../Style/components/NewSearch.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NoResult from "../components/NoResult";
import { useNavigate } from "react-router-dom";
import CatTitleSearch from "../components/CardTitleSearch";
import {
  MDBTable,
  MDBTableBody,
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBTableHead,
  MDBBtn,
  MDBBtnGroup,
  MDBPagination,
  MDBPaginationItem,
  MDBPaginationLink,
} from "mdb-react-ui-kit";
function NewSearch() {
  // const [inputText, setInputText] = useState("");
  // let inputHandler = (e) => {
  //   //convert input text to lower case
  //   var lowerCase = e.target.value.toLowerCase();
  //   setInputText(lowerCase);
  // };
  const [allFruits, setAllFruits] = useState([]);
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const handleSearch = async (e) => {
    // e.preventDefault();
    return await axios
      .get(`http://localhost:3001/users?q=${value}`)
      .then((response) => {
        setData(response.data);
        setValue("");
        console.log(value);
      })
      .catch((err) => console.log(err));
  };

  // console.log(data.length);

  useEffect(() => {
    axios.get("http://localhost:3001/users").then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <>
      <div>
        <CatTitleSearch></CatTitleSearch>
        <div
          style={{
            alignItems: "center",
            marginLeft: "600px",
            width: "400px",
          }}
        >
          <TextField
            id="outlined-basic"
            onChange={(e) => setValue(e.target.value)}
            variant="outlined"
            fullWidth
            label="Search"
          />
          <button
            onClick={() => handleSearch()}
            style={{
              width: "200px",
              marginLeft: "150px",
              marginTop: "20px",
              borderRadius: "20px",
              fontFamily: "BNazanin",
              backgroundColor: "black",
              color: "white",
            }}
          >
            جست و جو
          </button>
        </div>
      </div>
      {data.length === 0 ? (
        <NoResult></NoResult>
      ) : (
        <Row xs={1} md={3} className="g-5">
          {data.map((item, index) => (
            <Col key={index} className="g-2">
              <div className="containerio">
                <div className="card">
                  <div className="imgBx">
                    <img src={item.imageUrl} />
                  </div>

                  <div className="contentBx">
                    <div className="arrow"></div>
                    <h2>{item.name}</h2>
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
          ))}
        </Row>
      )}
    </>
  );
}
export default NewSearch;
