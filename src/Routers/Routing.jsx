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
import NewCardB from "../pages/Category/NewCardB";
import NewCardF from "../pages/Category/NewCardF";
import NewCardMen from "../pages/Category/NewCardMen";
import NewCardS from "../pages/Category/NewCardS";
import NewCardSpi from "../pages/Category/NewCardSpi";
import NewCardWi from "../pages/Category/NewCardWi";
import NewCardW from "../pages/Category/NewCardW";
import NewCardSpo from "../pages/Category/NewCardSpo";
import SubCatSh from "../components/SubCatSh";
import SubCatC from "../components/SubCatC";
import SubCatA from "../components/SubCatA";
import NewSearch from "../pages/NewSearch";

function Routing() {
  return (
    <Routes>
      <Route exact path="/home/*" element={<Home />} />
      <Route exact path="/category" element={<Category />} />
      <Route exact path="/search" element={<NewSearch />} />
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
      <Route path="/men" element={<NewCardMen />}></Route>
      <Route path="/women" element={<NewCardW />}></Route>
      <Route path="/baby" element={<NewCardB />}></Route>
      <Route path="/bahar" element={<NewCardSpi />}></Route>
      <Route path="/sport" element={<NewCardSpo />}></Route>
      <Route path="/summer" element={<NewCardS />}></Route>
      <Route path="/fall" element={<NewCardF />}></Route>
      <Route path="/winter" element={<NewCardWi />}></Route>
      <Route path="/lebas" element={<SubCatC />}></Route>
      <Route path="/kafsh" element={<SubCatSh />}></Route>
      <Route path="/accessory" element={<SubCatA />}></Route>
    </Routes>
  );
}

export default Routing;
