import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import ModalExample from "../../modal/Modal";
import logo from "../../../assets/img/logo.svg";
import "./assets/Header.css";

export const Header = () => {
  const location = useLocation();

  return (
    <Navbar expand="md">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img src={logo} alt="AIDeveloper" />
          </Link>
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link className="navbar-link">
            {location.pathname === "/submit" ? (
              <>
                <ModalExample />
              </>
            ) : (
              <>
                <Link to="/submit" className="no-underline">
                  지원하기
                </Link>
              </>
            )}
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
