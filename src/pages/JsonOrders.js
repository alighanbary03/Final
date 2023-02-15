import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { modalAction } from "../store/modalslice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import NewModal from "../components/NewModal";

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
import "../App.css";

function JsonOrders() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [sortvalue, setSortValue] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [pageLimit] = useState(4);
  const [sortFilterValue, setSortFilterValue] = useState("");
  const [operation, setOperation] = useState("");

  const [fruitName, setFruitName] = useState();
  const [url, setUrl] = useState();
  const [address, setAddress] = useState();
  const [phone, setPhone] = useState();
  const [orderDate, setOrderDate] = useState();
  const [currentDate, setCurrentDate] = useState();
  const [orders, setOrders] = useState([]);
  const [status, setStatus] = useState(Boolean);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const sortOptions = ["name", "address", "date", "phone", "status"];

  const id = useSelector((state) => state.ui.menu.id);
  console.log(id);
  useEffect(() => {
    axios
      .get(`http://localhost:3001/customers/${Number(id)}`)
      .then((response) => {
        setFruitName(response.data.name);
        setUrl(response.data.lastname);
        setAddress(response.data.address);
        setPhone(response.data.phone);
        setOrderDate(response.data.orderDate);
        setCurrentDate(response.data.currentDate);
        setOrders(response.data.orders);
        setStatus(response.data.status);
      });
  }, [id]);
  const showModal = useSelector((state) => state.ui.menu.show);

  const openConfirmDeleteModalHandler = (id) => {
    dispatch(modalAction.showMenu(id));
    // setShowModal(true);
  };

  const hideDeleteModalHandler = () => {
    dispatch(modalAction.hideMenu());
  };

  useEffect(() => {
    loadUsersData(0, 4, 0);
  }, []);

  const loadUsersData = async (
    start,
    end,
    increase,
    optType = null,
    filterOrSortValue
  ) => {
    switch (optType) {
      case "search":
        setOperation(optType);
        setSortValue("");
        return await axios
          .get(
            `http://localhost:3001/customers?q=${value}&_start=${start}=&_end=${end}`
          )
          .then((response) => {
            setData(response.data);
            setCurrentPage(currentPage + increase);
          })
          .catch((err) => console.log(err));
      case "sort":
        setOperation(optType);
        setSortFilterValue(filterOrSortValue);
        return await axios
          .get(
            `http://localhost:3001/customers?_sort=${filterOrSortValue}&_order=asc&_start=${start}&_end=${end}`
          )
          .then((response) => {
            setData(response.data);
            setCurrentPage(currentPage + increase);
          })
          .catch((err) => console.log(err));
      case "filter":
        setOperation(optType);
        setSortFilterValue(filterOrSortValue);
        return await axios
          .get(
            `http://localhost:3001/customers?status=${filterOrSortValue}&_order=asc&_start=${start}&_end=${end}`
          )
          .then((response) => {
            setData(response.data);
            setCurrentPage(currentPage + increase);
          })
          .catch((err) => console.log(err));

      default:
        return await axios
          .get(`http://localhost:3001/customers?_start=${start}=&_end=${end}`)
          .then((response) => {
            setData(response.data);
            setCurrentPage(currentPage + increase);
          })
          .catch((err) => console.log(err));
    }
  };

  console.log("data", data);

  const handleReset = () => {
    setOperation("");
    setValue("");
    setSortFilterValue("");
    setSortValue("");
    loadUsersData(0, 4, 0);
  };
  const handleSearch = async (e) => {
    e.preventDefault();
    loadUsersData(0, 4, 0, "search");
    //   return await axios
    //     .get(`http://localhost:2000/users?q=${value}`)
    //     .then((response) => {
    //       setData(response.data);
    //       setValue("");
    //     })
    //     .catch((err) => console.log(err));
  };
  const handleSort = async (e) => {
    let value = e.target.value;
    setSortValue(value);
    loadUsersData(0, 4, 0, "sort", value);
    // return await axios;
    // .get(`http://localhost:2000/users?_sort=${value}&_order=asc`)
    // .then((response) => {
    //   setData(response.data);
    // })
    // .catch((err) => console.log(err));
  };

  const handleFilter = async (value) => {
    loadUsersData(0, 4, 0, "filter", value);
    // return await axios
    //   .get(`http://localhost:2000/users?status=${value}`)
    //   .then((response) => {
    //     setData(response.data);
    //   })
    //   .catch((err) => console.log(err));
  };

  const renderPagination = () => {
    if (data.length < 4 && currentPage === 0) return null;
    if (currentPage === 0) {
      return (
        <MDBPagination className="mb-0">
          <MDBPaginationItem>
            <MDBPaginationLink>1</MDBPaginationLink>
          </MDBPaginationItem>
          <MDBPaginationItem>
            <MDBBtn
              onClick={() => loadUsersData(4, 8, 1, operation, sortFilterValue)}
            >
              بعدی
            </MDBBtn>
          </MDBPaginationItem>
        </MDBPagination>
      );
    } else if (currentPage < pageLimit - 1 && data.length === pageLimit) {
      return (
        <MDBPagination className="mb-0">
          <MDBPaginationItem>
            <MDBPaginationItem>
              <MDBBtn
                onClick={() =>
                  loadUsersData(
                    (currentPage - 1) * 4,
                    currentPage * 4,
                    -1,
                    operation,
                    sortFilterValue
                  )
                }
              >
                قبلی
              </MDBBtn>
            </MDBPaginationItem>
            <MDBPaginationItem>
              <MDBPaginationLink>{currentPage + 1}</MDBPaginationLink>
            </MDBPaginationItem>
          </MDBPaginationItem>
          <MDBPaginationItem>
            <MDBBtn
              onClick={() =>
                loadUsersData(
                  (currentPage + 1) * 4,
                  (currentPage + 2) * 4,
                  1,
                  operation,
                  sortFilterValue
                )
              }
            >
              بعدی
            </MDBBtn>
          </MDBPaginationItem>
        </MDBPagination>
      );
    } else {
      return (
        <MDBPagination className="mb-0">
          <MDBPaginationItem>
            <MDBBtn
              onClick={() =>
                loadUsersData(
                  (currentPage - 1) * 4,
                  currentPage * 4,
                  -1,
                  operation,
                  sortFilterValue
                )
              }
            >
              قبلی
            </MDBBtn>
          </MDBPaginationItem>
          <MDBPaginationItem>
            <MDBPaginationLink>{currentPage + 1}</MDBPaginationLink>
          </MDBPaginationItem>
        </MDBPagination>
      );
    }
  };
  return (
    <>
      <NewModal
        showModal={showModal}
        hideDeleteModalHandler={hideDeleteModalHandler}
        title={fruitName}
        body={url}
        address={address}
        phone={phone}
        orderDate={orderDate}
        currentDate={currentDate}
        orders={orders}
        status={status}
      />
      <h2 className="text-center" style={{ fontFamily: "BNazanin" }}>
        مدیریت سفارشات
      </h2>
      <MDBContainer style={{ marginBottom: "300px" }}>
        <form
          style={{
            margin: "auto",
            // padding: "15px",
            maxWidth: "400px",
            alignContent: "center",
          }}
          className="d-flex input-group w-auto"
          onSubmit={handleSearch}
        >
          <input
            type="text"
            // className="form-control"
            placeholder="جست و جوی نام"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            style={{ borderRadius: "20px", width: "500px" }}
          />
          {/* <MDBBtnGroup> */}
          <MDBBtn type="submit" color="dark">
            جست و جو
          </MDBBtn>
          <MDBBtn className="mx-2" color="info" onClick={() => handleReset()}>
            تازه سازی
          </MDBBtn>
          {/* </MDBBtnGroup> */}
        </form>
        <div>
          <MDBRow>
            <MDBCol size={"12"}>
              <MDBTable>
                <MDBTableHead dark>
                  <tr>
                    <th scope="col">شماره</th>
                    <th scope="col">نام</th>
                    <th scope="col">مجموعه مبلغ</th>
                    <th scope="col"> زمان ثبت سفارش</th>
                    <th scope="col">وضعیت</th>
                  </tr>
                </MDBTableHead>
                {data.length === 0 ? (
                  <MDBTableBody className="align-center mb-0">
                    <tr>
                      <td colSpan={8} className="text-center mb-0">
                        چیزی یافت نشد
                      </td>
                    </tr>
                  </MDBTableBody>
                ) : (
                  data.map((item, index) => (
                    <MDBTableBody key={index}>
                      <tr>
                        <th scope="row">{index + 1}</th>
                        <td>
                          {item.name}:{item.lastname}
                        </td>
                        <td>{item.total}</td>
                        <td>{item.currentDate}</td>
                        <td>
                          <button
                            onClick={() => {
                              openConfirmDeleteModalHandler(item.id);
                            }}
                          >
                            بررسی سفارش{" "}
                          </button>
                        </td>
                      </tr>
                    </MDBTableBody>
                  ))
                )}
              </MDBTable>
            </MDBCol>
          </MDBRow>
          <div
            style={{
              margin: "auto",
              padding: "15px",
              maxWidth: "400px",
              alignContent: "center",
            }}
          >
            {renderPagination()}
          </div>
        </div>
        {data.length > 0 && (
          <MDBRow style={{ marginLeft: "350px" }}>
            <MDBCol size={"8"}>
              <div dir="rtl">
                <h5
                  dir="rtl"
                  style={{ marginLeft: "220px", fontFamily: "BNazanin" }}
                >
                  دسته بندی بر اساس
                </h5>
              </div>
              <select
                style={{
                  width: "50%",
                  borderRadius: "25px",
                  height: "35px",
                  marginLeft: "150px",
                }}
                onChange={handleSort}
                value={sortvalue}
              >
                <option style={{ fontFamily: "BNazanin" }}>
                  لطفا یک مورد را انتخاب کنید
                </option>
                {sortOptions.map((item, index) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))}
              </select>
            </MDBCol>
            <MDBCol size={"4"}>
              <h5 style={{ fontFamily: "BNazanin" }}>فیلتر بر اساس تحویل</h5>
              <MDBBtnGroup style={{ width: "500px" }}>
                <MDBBtn
                  color="success"
                  onClick={() => handleFilter(true)}
                  style={{ borderRadius: "20px" }}
                  dir="rtl"
                >
                  تحویل داده شده
                </MDBBtn>
                <MDBBtn
                  color="danger"
                  style={{ marginLeft: "2px", borderRadius: "20px" }}
                  onClick={() => handleFilter(false)}
                >
                  تحویل داده نشده
                </MDBBtn>
              </MDBBtnGroup>
            </MDBCol>
          </MDBRow>
        )}
      </MDBContainer>
    </>
  );
}

export default JsonOrders;
