import React from "react";
import "../Style/components/Cardlist.css";

export const Cardlist = ({
  id,
  url,
  description,
  price,
  count,
  cardlist,
  setCardlist,
}) => {
  function remove() {
    let index = cardlist.findIndex((item, index) => item.id === id);
    let arr = [...cardlist];
    if (arr[index].count === 1) {
      arr.splice(index, 1);
    } else {
      arr[index].count--;
    }

    setCardlist(arr);
  }

  return (
    <>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dom</td>
            <td>6000</td>
          </tr>
          <tr className="active-row">
            <td>Melissa</td>
            <td>5150</td>
          </tr>
        </tbody>
      </table>
      <div classNameName="card-list">
        <div classNameName="list-card-chooiced">
          <div classNameName="img">
            <img
              src={url}
              style={{ width: "50px", marginRight: "20px" }}
              alt=""
            />
          </div>
          <div classNameName="detail">
            <p>{description}</p>
            <div classNameName="count">
              <p>
                تومان هزار{price} x {count}
              </p>
              <button onClick={remove}>remove</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
