import React, { useState } from "react";
import "./App.css";
import { NavLink, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

const App = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav((prevState) => !prevState);
  };

  return (
    <Router>
      <div className="app">
        <header className="header">
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
          </div>
        </header>
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer className="footer">
          <p>© AID_WEB_FRONT</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
