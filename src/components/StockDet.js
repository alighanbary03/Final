import React, { useState, useEffect } from "react";
import "../App.css";
import MaterialTable from "material-table";
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material";

function StockDet() {
  const mytheme = createTheme({});
  const url = "http://localhost:3001/users";
  const [data, setData] = useState([]);
  useEffect(() => {
    getStudents();
  }, []);

  const getStudents = () => {
    fetch(url)
      .then((resp) => resp.json())
      .then((resp) => setData(resp));
  };
  const columns = [
    {
      title: "کالا",
      field: "name",
      validate: (rowData) =>
        rowData.name === undefined || rowData.name === "" ? "Required" : true,
    },
    {
      title: "موجودی",
      field: "quantity",
      validate: (rowData) =>
        rowData.quantity === undefined || rowData.quantity === ""
          ? "Required"
          : true,
    },
    {
      title: "قیمت",
      field: "price",
      validate: (rowData) =>
        rowData.price === undefined || rowData.price === "" ? "Required" : true,
    },
    // {
    //   title: "Fee",
    //   field: "fee",
    //   validate: (rowData) =>
    //     rowData.fee === undefined || rowData.fee === "" ? "Required" : true,
    // },
  ];
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <div className="App">
        <h1 align="center" style={{ fontFamily: "BNazanin" }}>
          مدیریت موجودی و قیمت
        </h1>
        {/* <h4 align="center">
          CRUD operation with Json-Server (with Validation) in Material Table
        </h4> */}
        <ThemeProvider theme={mytheme}>
          <MaterialTable
            style={{ fontFamily: "BNazanin" }}
            title="مدیریت موجودی و قیمت"
            columns={columns}
            data={data}
            options={{ actionsColumnIndex: -1, addRowPosition: "first" }}
            localization={{
              pagination: {
                labelDisplayedRows: "{from}-{to} از{count}",
                labelRowsPerPage: "ردیف هر صفحه",
                labelRowsSelect: "ردیف",
              },
              toolbar: {
                nRowsSelected: "{0} ردیف(s) انتخاب شد",
              },
              header: {
                actions: "",
              },
              body: {
                emptyDataSourceMessage: "چیزی برای نمایش یافت نشد",
                filterRow: {
                  filterTooltip: "فیلتر",
                },
                editRow: {
                  deleteText: "آیا از پاک کردن کالا مطمئن هستید؟",
                },
              },
            }}
            editable={{
              // onRowAdd: (newData) =>
              //   new Promise((resolve, reject) => {
              //     //Backend call
              //     fetch(url, {
              //       method: "POST",
              //       headers: {
              //         "Content-type": "application/json",
              //       },
              //       body: JSON.stringify(newData),
              //     })
              //       .then((resp) => resp.json())
              //       .then((resp) => {
              //         getStudents();
              //         resolve();
              //       });
              //   }),
              onRowUpdate: (newData, oldData) =>
                new Promise((resolve, reject) => {
                  //Backend call
                  fetch(url + "/" + oldData.id, {
                    method: "PUT",
                    headers: {
                      "Content-type": "application/json",
                    },
                    body: JSON.stringify(newData),
                  })
                    .then((resp) => resp.json())
                    .then((resp) => {
                      getStudents();
                      resolve();
                    });
                }),
              onRowDelete: (oldData) =>
                new Promise((resolve, reject) => {
                  //Backend call
                  fetch(url + "/" + oldData.id, {
                    method: "DELETE",
                    headers: {
                      "Content-type": "application/json",
                    },
                  })
                    .then((resp) => resp.json())
                    .then((resp) => {
                      getStudents();
                      resolve();
                    });
                }),
            }}
          />
        </ThemeProvider>
      </div>
    </>
  );
}

export default StockDet;
