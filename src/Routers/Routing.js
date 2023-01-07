import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../components/Home";
import Category from "../components/Category";
import Searchbar from "../components/Searchbar";

function Routing() {
  return (
    <Routes>
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/category" element={<Category />} />
    </Routes>
  );
}

export default Routing;
