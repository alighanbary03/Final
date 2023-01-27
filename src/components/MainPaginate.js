import "../App.css";
import { useState } from "react";
import data from "../data/data";
import ReactPaginate from "react-paginate";
import { Card } from "./Card";
import { Navbar } from "../components/Navbar";
import React, { useEffect, useMemo } from "react";

function MainPaginate() {
  const [json, setJson] = useState(data.sort((a, b) => a.price - b.price));

  const [filter, setFilter] = useState({
    price: "lowest",
    size: "ALL",
  });

  const [cardlist, setCardlist] = useState([]);

  const [mode, setMode] = useState({
    show: false,
  });

  const [show, setShow] = useState({
    show: false,
  });

  let showModal = () => {
    setShow({
      show: true,
    });
  };

  let hideModal = () => {
    setShow({
      show: false,
    });
  };

  const [dataModal, setDataModal] = useState({
    url: "",
    id: "",
    title: "",
    des: "",
    price: "",
    sizes: [],
  });

  useEffect(() => {
    let arr = [];

    label: for (let i = 0; i < data.length; i++) {
      for (let h = 0; h < data[i].size.length; h++) {
        if (data[i].size[h] === filter.size) {
          arr.push(data[i]);
          continue label;
        }
      }
    }

    if (filter.price === "lowest") {
      setJson(arr.sort((a, b) => a.price - b.price));
    } else {
      setJson(arr.sort((a, b) => b.price - a.price));
    }
  }, [filter]);
  const changePage = ({ selected }) => {
    setPage(selected);
  };
  const [page, setPage] = useState(0);
  const [employees, setEmployees] = useState(data);

  const employeesPerPage = 5;
  const totalPages = Math.ceil(employees.length / employeesPerPage);
  const numberOfEmployeesVistited = page * employeesPerPage;
  console.log(numberOfEmployeesVistited);

  const displayEmployees = employees
    .slice(
      numberOfEmployeesVistited,
      numberOfEmployeesVistited + employeesPerPage
    )
    .map((employee) => {
      return (
        <>
          <div className="main">
            <div className="left">
              <Navbar filter={filter} setfilter={setFilter} len={json.length} />
              <div className="card-section">
                {json.map((employee, index) => (
                  <Card
                    key={employee.id}
                    id={employee.id}
                    url={employee.url}
                    description={employee.text}
                    price={employee.price}
                  >
                    {employee.description}
                  </Card>
                ))}
              </div>
            </div>
          </div>
          <div className="App">{displayEmployees}</div>;
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={totalPages}
            onPageChange={changePage}
            containerClassName={"navigationButtons"}
            previousLinkClassName={"previousButton"}
            nextLinkClassName={"nextButton"}
            disabledClassName={"navigationDisabled"}
            activeClassName={"navigationActive"}
          />
        </>
      );
    });
}
export default MainPaginate;
