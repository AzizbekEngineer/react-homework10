import React, { useEffect, useState } from "react";
import { LuSearch } from "react-icons/lu";
import { FaBars } from "react-icons/fa6";
import "./header.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("");
  const [data, setData] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={scrolled ? "header scrolled" : "header"}>
      <div
        onClick={() => setShow(false)}
        className={show ? "header__overlay show__overlay" : "header__overlay"}
      ></div>
      <nav className="header__navbar container">
        <div className="header__logo">
          <h2>Logo</h2>
        </div>
        <ul className={show ? "header__list show__list" : "header__list"}>
          <li className="header__item">
            <NavLink to={"./"}>Home</NavLink>
          </li>
          <li className="header__item">
            <NavLink to={"./teacher"}>Teachers</NavLink>
          </li>
          <li className="header__item">
            <NavLink to={"./students"}>Students</NavLink>
          </li>
          <li className="header__close" onClick={() => setShow(false)}>
            x
          </li>
        </ul>
        <div className="header__btns">
          <button>Sign in</button>
          <FaBars className="header__bar" onClick={() => setShow(true)} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
