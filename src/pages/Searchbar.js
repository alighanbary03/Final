import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import List from "../components/List";
import "../App.css";
import FinalPagination from "./FinalPagination/FinalPagination";
function Searchbar() {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <>
      <div className="main">
        <h1>جست و جوی محصولات</h1>
        <div className="search">
          <TextField
            id="outlined-basic"
            onChange={inputHandler}
            variant="outlined"
            fullWidth
            label="Search"
          />
        </div>
      </div>

      <List input={inputText} />
    </>
  );
}

export default Searchbar;
