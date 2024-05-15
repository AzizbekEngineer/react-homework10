import React from "react";
import { NavLink, Link } from "react-router-dom";
import { SiAppium, SiAnycubic } from "react-icons/si";
import { FaUsersRectangle } from "react-icons/fa6";
import { FaRegLightbulb } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { IoCube } from "react-icons/io5";
import "./sidebar.scss";

const Saidbar = () => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <Link to={"/"}>
          <IoCube />
        </Link>
        <span>Dashboard</span>
      </div>
      <ul className="sidebar__collection">
        <li className="sidebar__item">
          <NavLink className={"sidebar__link "} to={"products"}>
            <SiAppium />
            <span>Products</span>
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink className={"sidebar__link"} to={"users"}>
            <FaUsersRectangle />
            <span>Users</span>
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink className={"sidebar__link"} to={"post"}>
            <FaRegLightbulb />
            <span>Posts</span>
          </NavLink>
        </li>
      </ul>
      <button className="logout" onClick={handleLogOut}>
        Log Out
      </button>
    </div>
  );
};

export default Saidbar;
