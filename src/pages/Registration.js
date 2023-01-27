import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import Login from "./Login";

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [profession, setProfession] = useState("");

  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);
  const [info, setInfo] = useState(true);

  // on form submit...
  function handleFormSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password || !phone || !profession) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("SubmissionEmail", JSON.stringify(email));
      localStorage.setItem("SubmissionPassword", JSON.stringify(password));
      console.log("Saved in Local Storage");

      setLogin(!login);
    }
  }

  // Directly to the login page
  function handleClick() {
    setLogin(!login);
  }

  // Company Info
  function infoClick() {
    setInfo(!info);
  }

  return (
    <>
      <nav className="navbar navbar-light">
        <div className="container" onClick={infoClick}>
          <h4 className="btn btn-dark btn-lg btn-block">خروج از حساب</h4>
        </div>
      </nav>
      {info ? (
        <div>
          {" "}
          {login ? (
            <form onSubmit={handleFormSubmit}>
              <h3>ثبت نام</h3>

              <div className="form-group">
                <label>نام</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Full Name"
                  name="name"
                  onChange={(event) => setName(event.target.value)}
                />
              </div>

              <div className="form-group">
                <label>ایمیل</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>

              <div className="form-group">
                <label>رمز عبور</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>

              <div className="form-group">
                <label>شماره تلفن</label>
                <input
                  type="Phone"
                  className="form-control"
                  placeholder="Enter contact no"
                  onChange={(event) => setPhone(event.target.value)}
                />
              </div>

              <div className="form-group">
                <label>نقش خود را انتخاب کنید</label>
                <Form.Control
                  as="select"
                  onChange={(event) => setProfession(event.target.value)}
                >
                  <option>انتخاب نقش</option>
                  <option>خریدار</option>
                  <option>فروشنده</option>
                </Form.Control>
              </div>

              <button type="submit" className="btn btn-dark btn-lg ">
                ثبت نام
              </button>
              <p className="forgot-password text-right">
                قبلا ثبت نام کردید؟{" "}
                <a href="#" onClick={handleClick}>
                  ورود
                </a>
              </p>
              {flag && (
                <Alert color="primary" variant="danger">
                  رمز عبور یا نام کاربری اشتباه است
                </Alert>
              )}
            </form>
          ) : (
            <Login />
          )}
        </div>
      ) : (
        <div>
          <p>
            <strong>Company:</strong> V4-LAB Software Solutions PVT Ltd
          </p>
          <p>
            <strong>Address:</strong> Hosa Road, Bengaluru-56
          </p>
          <p>
            <strong>Phone:</strong> XXXXXXXXXX09
          </p>
          <p>
            <strong>Email:</strong> v4labs@gmail.com
          </p>
        </div>
      )}
    </>
  );
}

export default Registration;
