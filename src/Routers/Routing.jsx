import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home/Home";
import Category from "../pages/Category/Category";
import Searchbar from "../pages/Searchbar";
import FinalPagination from "../pages/FinalPagination/FinalPagination";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Admin from "../pages/Admin/Admin";
import AddFruit from "../pages/AddProduct/AddFruit";
import UpdateFruit from "../pages/UpdateFruit";
import AdminPanel from "../pages/AdminPanel/AdminPanel";
import Orders from "../pages/Orders";
import JsonOrders from "../pages/JsonOrders";
import AdminTab from "../pages/AdminTab";
import NewCard from "../components/NewCard";
import Single from "../pages/SinglePage";

function Routing() {
  return (
    <Routes>
      <Route exact path="/home/*" element={<Home />} />
      <Route exact path="/category" element={<Category />} />
      <Route exact path="/search" element={<Searchbar />} />
      <Route exact path="/all" element={<FinalPagination />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<Registration />} />
      <Route exact path="/cardlist" element={<Admin />} />
      <Route path="/add-fruit" element={<AddFruit />}></Route>
      <Route path="/update-fruit/:id" element={<UpdateFruit />}></Route>
      <Route path="/admin" element={<AdminPanel />}></Route>
      <Route path="/orders" element={<Orders />}></Route>
      <Route path="/order-customer" element={<JsonOrders />}></Route>
      <Route path="/admin-tab" element={<AdminTab />}></Route>
      <Route path="/single/:id" element={<Single />}></Route>
    </Routes>
  );
}

export default Routing;
