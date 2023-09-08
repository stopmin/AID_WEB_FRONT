import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ContentSection } from "./List"; // ContentSection 컴포넌트를 불러옴
import Login from "./Login";

const Admin = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);

  /* admin 접속 시 로그인 창 바로 뜨게 하기 */
  const [showLogin, setShowLogin] = useState(true);
  const [loginInfo, setLoginInfo] = useState({ username: "", password: "" });

  const handleLogin = (username, password) => {
    setLoginInfo({ username, password });
    setShowLogin(false);
  };

  return (
    <div className="items-center flex justify-center">
      <section className="banner">
        <Container>
          <div className="text-2xl text-center font-border">Admin Page</div>
          <br />
          {showLogin ? (
            <Login onLogin={handleLogin} />
          ) : (
            <>
              <ContentSection username={loginInfo.username} password={loginInfo.password} currentPage={currentPage} postsPerPage={postsPerPage} />
              <Link to="/admin/send">
                <div className="text-center mt-4">
                  <button className="opacity-50 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                    Send Mail
                  </button>
                </div>
              </Link>
            </>
          )}
        </Container>
      </section>
    </div>
  );
};

export default Admin;
