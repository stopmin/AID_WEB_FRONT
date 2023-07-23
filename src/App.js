import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/Navigation/NavigationBar";
import Board from "./components/Page/Board";
import Login from "./components/Page/Login";
import Introduction from "./components/Page/Introduction";
import ClubApply from "./components/Page/ClubApply";

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/intro" element={<Introduction />} />
        <Route path="/login" element={<Login />} />
        <Route path="/board" element={<Board />} />
        <Route path="/club-apply" element={<ClubApply />} />
      </Routes>
    </Router>
  );
};

export default App;
