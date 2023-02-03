import React, { useEffect, useState } from "react";
import "../../src/App.css";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles//ag-grid.css";
import "ag-grid-community/styles//ag-theme-alpine.css";
import Grid from "@mui/system/Unstable_Grid/Grid";
import { Button } from "@material-ui/core";
import FormDialog from "../components/dialog";
import axios from "axios";
import { toast } from "react-toastify";
import data from "../data/data";
const initialValue = {
  name: "",
  quantity: "",
  price: "",
  url: "",
  cat: "",
  des: "",
  imageUrl: "",
};
function NewStock() {
  const [gridApi, setGridApi] = useState(null);
  const [tableData, setTableData] = useState(null);
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = useState(initialValue);
  const { id, name, quantity, price, cat, des, imageUrl, subcat } = formData;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleClose = () => {
    setOpen(false);
    setFormData(initialValue);
  };
  const url = `http://localhost:3001/users`;

  // const url2 = `http://localhost:3001/users/men`;

  const columnDefs = [
    { headerName: "شماره", field: "id" },
    { headerName: "نام محصول", field: "name" },
    { headerName: "تعداد ", field: "quantity" },
    { headerName: "دسته بندی", field: "cat" },
    // { headerName: "Date of Birth", field: "dob" },
    {
      headerName: "عملیات",
      field: "id",
      cellRendererFramework: (params) => (
        <div>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => handleUpdate(params.data)}
          >
            ویرایش
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => handleDelete(params.value)}
            style={{ fontFamily: "BNazanin" }}
          >
            پاک کردن
          </Button>
        </div>
      ),
    },
  ];
  // calling getUsers function for first time
  useEffect(() => {
    getUsers();
  }, []);

  //fetching user data from server
  const getUsers = () => {
    fetch(url)
      .then((resp) => resp.json())
      .then((resp) => setTableData(resp));
  };

  const onChange = (e) => {
    const { value, id } = e.target;
    // console.log(value,id)
    setFormData({ ...formData, [id]: value });
  };

  const onUploadImage = (file) => {
    console.log("file", file);
    const fd = new FormData();
    fd.append("file", file);
    fd.append("upload_preset", "wd68ftgm");
    axios
      .post("http://api.cloudinary.com/v1_1/dbs8zkbf5/image/upload", fd)
      .then((resp) => {
        console.log("Response", resp);
        toast.info("عکس با موفقیت آپلود شد");
        setFormData({ ...formData, imageUrl: resp.data.url });
      })
      .catch((err) => {
        toast.error("آپلود ناموفق");
      });
  };
  const onGridReady = (params) => {
    setGridApi(params);
  };

  // setting update row data to form data and opening pop up window
  const handleUpdate = (oldData) => {
    setFormData(oldData);
    handleClickOpen();
  };
  //deleting a user
  const handleDelete = (id) => {
    const confirm = window.confirm("آیا از حذف کالا اطمینان دارید؟", id);
    if (confirm) {
      fetch(url + `/${id}`, { method: "DELETE" })
        .then((resp) => resp.json())
        .then((resp) => getUsers());
    }
  };

  // const onInputChange = (e) => {
  //   let { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  const handleFormSubmit = () => {
    if (formData.id) {
      //updating a user
      const confirm = window.confirm("آیا از ویرایش کالا اطمینان دارید؟");
      confirm &&
        fetch(url + `/${formData.id}`, {
          method: "PUT",
          body: JSON.stringify(formData),
          headers: {
            "content-type": "application/json",
            //  "token":"65e9f48e94f89e4f"
          },
        })
          .then((resp) => resp.json())
          .then((resp) => {
            handleClose();
            // setFormData({ ...formData, imageUrl: resp.data.url });
            getUsers();
          });
      // } else if (formData.cat === "1") {
      //   // adding new user
      //   fetch(url2, {
      //     method: "POST",
      //     body: JSON.stringify(formData),
      //     headers: {
      //       "content-type": "application/json",
      //     },
      //   })
      //     .then((resp) => resp.json())
      //     .then((resp) => {
      //       handleClose();
      //       getUsers();
      //     });
    } else {
      fetch(url, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "content-type": "application/json",
        },
      })
        .then((resp) => resp.json())
        .then((resp) => {
          handleClose();
          getUsers();
        });
    }
    // onUploadImage();
  };

  const defaultColDef = {
    sortable: true,
    flex: 1,
    filter: true,
    floatingFilter: true,
    enableRtl: true,
  };
  return (
    <div className="App">
      <h1 align="center" style={{ fontFamily: "BNazanin" }}>
        مدیریت کالا ها
      </h1>
      {/* <h3>CRUD Operation with Json-server in ag-Grid</h3> */}
      <Grid align="right">
        <Button
          variant="contained"
          color="primary"
          onClick={handleClickOpen}
          style={{
            marginBottom: "20px",
            marginRight: "20px",
            fontFamily: "BNazanin",
          }}
        >
          افزودن کالا
        </Button>
      </Grid>
      <div className="ag-theme-alpine" style={{ height: "400px" }} dir="rtl">
        <AgGridReact
          rowData={tableData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          onGridReady={onGridReady}
          enableRtl={true}
        />
      </div>
      <FormDialog
        open={open}
        handleClose={handleClose}
        data={formData}
        // onChange={onChange}
        handleFormSubmit={handleFormSubmit}
        onUploadImage={onUploadImage}
        onInputChange={onInputChange}
      />
    </div>
  );
}

export default NewStock;
