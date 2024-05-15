import React from "react";
import { Outlet } from "react-router-dom";
import "./admin.scss";
import Saidbar from "../../components/saidbar/Saidbar";

const Admin = () => {
  return (
    <div className="admin ">
      <Saidbar />
      <Outlet />
    </div>
  );
};

export default Admin;
