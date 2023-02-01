import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { TextField } from "@material-ui/core";
import { MDBInput } from "mdb-react-ui-kit";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

// const initialValue = {
//   name: "",
//   quantity: "",
//   price: "",
//   url: "",
//   cat: "",
//   des: "",
//   imageUrl: "",
// };

export default function FormDialog({
  open,
  handleClose,
  data,
  // onChange,
  onUploadImage,
  handleFormSubmit,
  onInputChange,
}) {
  const { id, name, quantity, price, url, des, imageUrl, cat, subcat } = data;

  // const [formData, setFormData] = useState(initialValue);

  // const { id, name, quantity, price, cat, url, des, imageUrl } = formData;

  // const onInputChange = (e) => {
  //   let { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const onUploadImage = (file) => {
  //   console.log("file", file);
  //   const formData = new FormData();
  //   formData.append("file", file);
  //   formData.append("upload_preset", "wd68ftgm");
  //   axios
  //     .post("http://api.cloudinary.com/v1_1/dbs8zkbf5/image/upload", formData)
  //     .then((resp) => {
  //       console.log("Response", resp);
  //       toast.info("عکس با موفقیت آپلود شد");
  //       setFormData({ ...formData, imageUrl: resp.data.url });
  //     })
  //     .catch((err) => {
  //       toast.error("آپلود ناموفق");
  //     });
  // };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        dir="rtl"
      >
        <DialogTitle
          id="alert-dialog-title"
          dir="rtl"
          style={{ textAlign: "center" }}
        >
          {id ? "ویرایش کالا" : "افزودن کالا"}
        </DialogTitle>

        <DialogContent>
          <form>
            <TextField
              id="name"
              value={name}
              onChange={onInputChange}
              placeholder="نام محصول"
              // label="Name"
              variant="outlined"
              margin="dense"
              fullWidth
              name="name"
            />
            <TextField
              id="quantity"
              value={quantity}
              onChange={onInputChange}
              placeholder="تعداد"
              // label="Email"
              variant="outlined"
              margin="dense"
              fullWidth
              name="quantity"
            />
            <TextField
              id="price"
              value={price}
              onChange={onInputChange}
              placeholder="قیمت"
              // label="Phone Number"
              variant="outlined"
              margin="dense"
              fullWidth
              name="price"
            />
            {/* <TextField
              id="url"
              value={url}
              onChange={onInputChange}
              placeholder="لینک عکس"
              // label="Date of Birth"
              variant="outlined"
              margin="dense"
              fullWidth
              name="url"
            /> */}
            <MDBInput
              id="imageUrl"
              type="file"
              onChange={(e) => onUploadImage(e.target.files[0])}
              required
              validation="لطفا عکس را آپلود کنید"
              invalid
              // value={imageUrl}
              name="imageUrl"
            />
            <div class="custom-select" style={{ width: "200px" }}>
              <select value={cat} onChange={onInputChange} id="cat" name="cat">
                <option value="0">انتخاب دسته بندی:</option>
                <option value="لباس">لباس</option>
                <option value="کفش"></option>
                <option value="اکسسوری">بچگانه</option>
              </select>
            </div>
            <div class="custom-select" style={{ width: "200px" }}>
              <select
                value={subcat}
                onChange={onInputChange}
                id="subcat"
                name="subcat"
              >
                <option value="0">انتخاب دسته بندی:</option>
                <option value="مردانه">مردانه</option>
                <option value="زنانه">زنانه</option>
                <option value="بچگانه">بچگانه</option>
              </select>
            </div>
            <textarea
              onChange={onInputChange}
              id="des"
              value={des}
              placeholder="توضیحات"
              name="des"
            ></textarea>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary" variant="outlined">
            لغو
          </Button>
          <Button
            color="primary"
            onClick={() => handleFormSubmit()}
            variant="contained"
          >
            {id ? "ویرایش" : "افزودن"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
