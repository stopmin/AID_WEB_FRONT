import React, { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import "./ToggleBar.css";
import Home from "../Page/Home";
import Contact from "../Page/Contact";
import About from "../Page/About";

const ToggleBar = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav((prevState) => !prevState);
  };
  return (
    <div className="navbar-container">
      <nav className={`navbar ${showNav ? "active" : ""}`}>
        <div className="nav-toggle" onClick={toggleNav}>
          <div className={`bar ${showNav ? "bar-open" : ""}`} />
          <div className={`bar ${showNav ? "bar-open" : ""}`} />
          <div className={`bar ${showNav ? "bar-open" : ""}`} />
        </div>
        <ul className={`nav-items ${showNav ? "nav-items-show" : ""}`}>
          <li>
            <NavLink exact to="/" activeClassName="active" onClick={toggleNav}>
              홈
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active" onClick={toggleNav}>
              소개
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active" onClick={toggleNav}>
              문의
            </NavLink>
          </li>
        </ul>
      </nav>
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
};

export default ToggleBar;
