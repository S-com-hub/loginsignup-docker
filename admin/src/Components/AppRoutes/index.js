import { useState } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Customers from "../../Pages/Customers";
import Dashboard from "../../Pages/Dashbaord";
import Inventory from "../../Pages/Inventory";
import Orders from "../../Pages/Orders";
import Login from "../../Pages/Login";
import Register from "../../Pages/Register";
import Layout from "../../Pages/Layout";


function AppRoutes() {
  const [user, setLoginUser] = useState({})
  let navigate = useNavigate();
  // console.log(user, 'uuuuuuuuuuuuuu')
  return (
    <Routes>
      <Route exact path="/" element=
        {
          <Login setLoginUser={setLoginUser} />
        }>
      </Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/admin" element={<Layout />}>
        <Route path="/admin/dashboard" element={<Dashboard />}></Route>
        <Route path="/admin/inventory" element={<Inventory />}></Route>
        <Route path="/admin/orders" element={<Orders />}></Route>
        <Route path="/admin/customers" element={<Customers />}></Route>
      </Route>

    </Routes>
  );
}
export default AppRoutes;
