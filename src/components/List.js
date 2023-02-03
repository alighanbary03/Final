import { React, useState } from "react";
import data from "../data/ListData.json";
import { Card } from "./Card";
import Gridi from "./Gridi";
import Header from "../layouts/header/Header";
function List(props) {
  //create a new array by filtering the original array
  const filteredData = data.users((el) => {
    return el.text.toLocaleLowerCase().includes(props.input);

    //if no input the return the original
    // if (props.input === "") {
    //   return el;
    // }
    // //return the item which contains the user input
    // else {
    //   return el.text.toLowerCase().includes(props.input);
    // }
  });
  if (filteredData.length > 0) {
    return (
      <>
        <ul>
          {filteredData.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              url={item.url}
              des={item.text}
              price={item.text}
            >
              {item.text}
            </Card>
          ))}
        </ul>
      </>
    );
  } else {
    return <Gridi></Gridi>;
  }
}

export default List;
