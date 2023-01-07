import { React, useState } from "react";
import data from "../data/ListData.json";
import { Card } from "./Card";
function List(props) {
  //create a new array by filtering the original array
  const filteredData = data.filter((el) => {
    //if no input the return the original
    if (props.input === "") {
      return el;
    }
    //return the item which contains the user input
    else {
      return el.text.toLowerCase().includes(props.input);
    }
  });
  return (
    <ul>
      {filteredData.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          url={item.url}
          description={item.text}
          price={item.price}
        >
          {item.description}
        </Card>
      ))}
    </ul>
  );
}

export default List;
