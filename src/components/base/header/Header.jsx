import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { ModalExample } from "../../modal/Modal";
import logo from "../../../assets/img/logo.svg";
import "./assets/Header.css";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img src={logo} alt="AIDeveloper" />
          </Link>
        </Navbar.Brand>
        <Nav className="ms-auto">
          {location.pathname !== "/admin" && (
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
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};
