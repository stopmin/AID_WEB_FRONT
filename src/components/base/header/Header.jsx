import React from "react";

import { Link, useLocation } from "react-router-dom";
import "./assets/header.css";
import ModalExample from "../../modal/Modal";

const Header = () => {
  const GetField = () => {
    const axios = require("axios");
    // axios.get;
  };

  const location = useLocation();

  console.log(location);

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
      {/* 지원페이지 삼항연산자 */}
      {location.pathname === "/submit" ? (
        <>
          <Link to="/submit">
            <button className="apply-button">지원하기</button>
          </Link>
          <ModalExample />
        </>
      ) : (
        <>
          <Link to="/submit">
            <button className="apply-button">지원하기</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Header;
