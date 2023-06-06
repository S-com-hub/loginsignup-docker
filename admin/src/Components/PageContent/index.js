import { Route, Routes } from "react-router-dom";
import AppRoutes from "../AppRoutes";
import Dashboard from "../../Pages/Dashbaord";
import Inventory from "../../Pages/Inventory";
import Orders from "../../Pages/Orders";
import Customers from "../../Pages/Customers";

function PageContent() {
  return (
    <div className="PageContent">
    <Routes>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/inventory" element={<Inventory />}></Route>
      <Route path="/orders" element={<Orders />}></Route>
      <Route path="/customers" element={<Customers />}></Route>


    </Routes>
    </div>
  );
}
export default PageContent;
