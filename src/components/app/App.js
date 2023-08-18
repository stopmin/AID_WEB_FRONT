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
  const handleFormSubmit = async (formData) => {
    try {
      const response = await axios.post("/api/submit/create", formData);
      console.log("POST success:", response.data);
    } catch (error) {
      console.error("POST error:", error);
    }
  };

  return (
    <Router>
      <Header />
      <Center>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/submit" element={<Submit onSubmit={handleFormSubmit} />} />
        </Routes>
      </Center>
    </Router>
  );
};

export default App;
