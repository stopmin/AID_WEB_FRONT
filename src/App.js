import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/Navigation/NavigationBar";
import Board from "./components/Page/Board";
import Login from "./components/Page/Login";
import Introduction from "./components/Page/Introduction";
import ClubApply from "./components/Page/ClubApply";
import Home from "./components/Page/Home";
import About from "./components/Page/About";
import Contact from "./components/Page/Contact";

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <div className="pages">
        <Routes>
          <Route path="/intro" element={<Introduction />} />
          <Route path="/login" element={<Login />} />
          <Route path="/board" element={<Board />} />
          <Route path="/club-apply" element={<ClubApply />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
