import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/base/header/Header";
import { Submit } from "./components/pages/submit/Submit";
import { Home } from "./components/Home";
import Admin from "./components/pages/admin/Admin";
import Sender from "./components/pages/admin/Sender";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/submit" element={<Submit />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/send" element={<Sender />} />
      </Routes>
    </Router>
  );
}

export default App;
