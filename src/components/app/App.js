import React from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "../base/header/Header";
const App = () => {
  return (
    <Router>
      <Header />
    </Router>
  );
};

export default App;
