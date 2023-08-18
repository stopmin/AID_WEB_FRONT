import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../base/header/Header";

import Submit from "../pages/submit/Submit";
import Home from "../pages/home/Home";

import axios from "axios";

const Center = styled.div`
  display: flex;
`;

const App = () => {
  return (
    <Router>
      <Header />
      <Center>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/submit" element={<Submit />} />
        </Routes>
      </Center>
    </Router>
  );
};

export default App;
