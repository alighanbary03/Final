import React from "react";
import "../Style/Navbar.css";

export const Navbar = ({ filter, setfilter, len }) => {
  function change(e) {
    setfilter({ ...filter, [e.target.name]: e.target.value });
  }

  return (
    <div className="menu">
      <div>{len} محصول</div>
      <div>
        <span> قیمت مرتب سازی بر اساس قیمت </span>
        <select onChange={change} value={filter.price} name="price" id="">
          <option value="lowest">کم ترین قیمت</option>
          <option value="highest">بیشترین قیمت</option>
        </select>
      </div>
      <div>
        <span>سایز بندی </span>
        <select name="size" onChange={change} value={filter.size} id="">
          <option value="ALL">All</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
      </div>
    </div>
  );
};
