import React from "react";
import { Link } from "react-router-dom";
import "./NavigationBar.css";

const NavigationBar = () => {
  return (
    <div className="navigation-bar">
      <Link to="/intro">동아리 소개</Link>
      <Link to="/login">로그인</Link>
      <Link to="/board">게시판</Link>
      <Link to="/club-support">동아리 지원</Link>
    </div>
  );
};

export default NavigationBar;
