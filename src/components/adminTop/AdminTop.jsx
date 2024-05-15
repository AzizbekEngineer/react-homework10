import React, { useState } from "react";
import "./adminTop.scss";
import { FaBars } from "react-icons/fa6";
import avatarImg from "../../assets/img/avatar.svg";
import btnimg from "../../assets/img/btn.svg";

const AdminTop = ({ title }) => {
  return (
    <div className="menu">
      <div className="menu__top">
        <FaBars className="bar" />
        <div className="menu__avatar">
          <span>Jones Ferdinand</span>
          <img src={avatarImg} alt="" />
        </div>
      </div>
      <div className="menu__bottom">
        <h2 className="title">{title}</h2>
        <div className="menu__btns">
          <div className="menu__btn">
            <img src={btnimg} alt="" />
          </div>
          <button className="menu__add__btn">Add</button>
        </div>
      </div>
    </div>
  );
};

export default AdminTop;
