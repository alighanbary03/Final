import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import Home from "./Home/Home";
// import "../assets/Login/images/icons/favicon.ico";
// import "../assets/Login/vendor/bootstrap/css/bootstrap.min.css";
// import "../assets/Login/vendor/animate/animate.css";
// import "../assets/Login/vendor/css-hamburgers/hamburgers.min.css";
// import "../assets/Login/vendor/animsition/css/animsition.min.css";
// import "../assets/Login/vendor/select2/select2.min.css";
// import "../assets/Login/vendor/daterangepicker/daterangepicker.css";
// import "../assets/Login/css/util.css";
// import "../assets/Login/css/main.css";
import "../Style/pages/Login.css";
import bg from "../assets/Login/images/bg-01.jpg";
function Login() {
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");

  const [flag, setFlag] = useState(false);

  const [home, setHome] = useState(true);

  function handleLogin(e) {
    e.preventDefault();
    let pass = localStorage.getItem("SubmissionPassword").replace(/"/g, "");
    let mail = localStorage.getItem("SubmissionEmail").replace(/"/g, "");
    // .replace(/"/g,"") is used to remove the double quotes for the string

    if (!emaillog || !passwordlog) {
      setFlag(true);
      console.log("EMPTY");
    } else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
    } else {
      setHome(!home);
      setFlag(false);
    }
  }

  return (
    <div className="containeri">
      {home ? (
        <div className="screen">
          <div className="screen__content">
            <form className="login" onSubmit={handleLogin}>
              <div className="login__field">
                <i className="login__icon fas fa-user"></i>
                <input
                  type="email"
                  className="login__input"
                  placeholder="User name / Email"
                  onChange={(event) => setEmaillog(event.target.value)}
                />
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-lock"></i>
                <input
                  type="password"
                  className="login__input"
                  placeholder="Password"
                  onChange={(event) => setPasswordlog(event.target.value)}
                />
              </div>
              <button type="submit" className="button login__submit">
                <span className="button__text">Log In Now</span>
                <i className="button__icon fas fa-chevron-right"></i>
              </button>
              {flag && (
                <Alert color="primary" variant="warning">
                  مشخصات وارد شده اشتباه است
                </Alert>
              )}
            </form>
            {/* <div className="social-login">
              <h3>log in via</h3>
              <div className="social-icons">
                <a href="#" className="social-login__icon fab fa-instagram"></a>
                <a href="#" className="social-login__icon fab fa-facebook"></a>
                <a href="#" className="social-login__icon fab fa-twitter"></a>
              </div>
            </div> */}
          </div>
          <div className="screen__background">
            <span className="screen__background__shape screen__background__shape4"></span>
            <span className="screen__background__shape screen__background__shape3"></span>
            <span className="screen__background__shape screen__background__shape2"></span>
            <span className="screen__background__shape screen__background__shape1"></span>
          </div>
        </div>
      ) : (
        <Home />
      )}
    </div>
  );
}

export default Login;

{
  /* <form onSubmit={handleLogin} className="login">
  <input type="email" onChange={(event) => setEmaillog(event.target.value)} placeholder="Username" />
  <input onChange={(event) => setPasswordlog(event.target.value)} type="password" placeholder="Password" />
  <button type="submit">Login</button>
  {flag && (
    <Alert color="primary" variant="warning">
      مشخصات وارد شده اشتباه است
    </Alert>
  )}
</form> */
}

{
  /* <div className="container">
	<div className="screen">
		<div className="screen__content">
			<form className="login" onSubmit={handleLogin} >
				<div className="login__field">
					<i className="login__icon fas fa-user"></i>
					<input type="email" className="login__input" placeholder="User name / Email"  onChange={(event) => setEmaillog(event.target.value)}/>
				</div>
				<div className="login__field">
					<i className="login__icon fas fa-lock"></i>
					<input onChange={(event) => setPasswordlog(event.target.value)} type="password" className="login__input" placeholder="Password"/>
				</div>
				<button className="button login__submit" type="submit">
					<span className="button__text">Log In Now</span>
					<i className="button__icon fas fa-chevron-right"></i>
				</button>
        {flag && (
            <Alert color="primary" variant="warning">
              مشخصات وارد شده اشتباه است
            </Alert>
          )}				
			</form>
		<div className="screen__background">
			<span className="screen__background__shape screen__background__shape4"></span>
			<span className="screen__background__shape screen__background__shape3"></span>		
			<span className="screen__background__shape screen__background__shape2"></span>
			<span className="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div> */
}

{
  /* <div className="container">
  <div className="screen">
    <div className="screen__content">
      <form className="login" onSubmit={handleLogin}>
        <div className="login__field">
          <i className="login__icon fas fa-user"></i>
          <input
            type="text"
            className="login__input"
            placeholder="User name / Email"
            onChange={(event) => setEmaillog(event.target.value)}
          />
        </div>
        <div className="login__field">
          <i className="login__icon fas fa-lock"></i>
          <input
            type="password"
            className="login__input"
            placeholder="Password"
            onChange={(event) => setPasswordlog(event.target.value)}
          />
        </div>
        <button className="button login__submit">
          <span className="button__text">Log In Now</span>
          <i className="button__icon fas fa-chevron-right"></i>
        </button>
        {flag && (
          <Alert color="primary" variant="warning">
            مشخصات وارد شده اشتباه است
          </Alert>
        )}
      </form>
      <div className="social-login">
        <h3>log in via</h3>
        <div className="social-icons">
          <a href="#" className="social-login__icon fab fa-instagram"></a>
          <a href="#" className="social-login__icon fab fa-facebook"></a>
          <a href="#" className="social-login__icon fab fa-twitter"></a>
        </div>
      </div>
    </div>
    <div className="screen__background">
      <span className="screen__background__shape screen__background__shape4"></span>
      <span className="screen__background__shape screen__background__shape3"></span>
      <span className="screen__background__shape screen__background__shape2"></span>
      <span className="screen__background__shape screen__background__shape1"></span>
    </div>
  </div>
</div>; */
}
