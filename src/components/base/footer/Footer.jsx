import { Container, Row, Col } from "react-bootstrap";
import "./assets/footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} className="text-center text-sm-end">
            <p>문의: aidpnu@gmail.com</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
