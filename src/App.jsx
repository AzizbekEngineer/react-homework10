import React from "react";
import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Admin from "./pages/admin/Admin";
import Products from "./pages/admin/products/Products";
import Users from "./pages/admin/users/Users";
import Post from "./pages/admin/post/Post";
import Login from "./pages/login/Login";
import Auth from "./pages/auth/Auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/" element={<Auth />}>
          <Route path="admin" element={<Admin />}>
            <Route path="products" element={<Products />} />
            <Route path="users" element={<Users />} />
            <Route path="post" element={<Post />} />
          </Route>
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
};

export default App;
