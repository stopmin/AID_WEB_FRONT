import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import "./NavigationBar.css";
import ToggleBar from "./ToggleBar";
import Home from "../Page/Home";
import About from "../Page/About";
import Contact from "../Page/Contact";

const NavigationBar = () => {
  return (
    <div className="navigation-bar">
      <div className="pages">
        <Link to="/intro">동아리 소개</Link>
        <Link to="/login">로그인</Link>
        <Link to="/board">게시판</Link>
        <Link to="/club-apply">동아리 지원</Link>
      </div>
      <div className="toggle">
        <ToggleBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
};

export default NavigationBar;
