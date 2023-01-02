import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    // Using the newly created Header
    // component in this main component
    <>
      <Header />
      <Router>
        <div className="App">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/contact" element={<Contact />}></Route>
          </Routes>
        </div>
      </Router>
      <Footer />
    </>
  );
}
export default App;
