import React from "react";
import { Link } from "react-router-dom";
import "./assets/Header.css";

const Header = () => {
  return (
    <div className="header">
      <h1>
        <Link to="/" className="no-underline">
          AID
        </Link>
      </h1>
      <h2>
        <Link to="/" className="no-underline">
          eveloper
        </Link>
      </h2>
      <Link to="/submit">
        <button className="apply-button">지원하기</button>
      </Link>
      {/* <div>
        <Link to="/intro">동아리 소개</Link>
        <Link to="/login">로그인</Link>
        <Link to="/board">게시판</Link>
        <Link to="/club-apply">동아리 지원</Link>
      </div> */}
    </div>
  );
};

export default Header;
