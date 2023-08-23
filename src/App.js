import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/base/header/Header";
import { Submit } from "./components/pages/submit/Submit";
import { Home } from "./components/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/submit" element={<Submit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
