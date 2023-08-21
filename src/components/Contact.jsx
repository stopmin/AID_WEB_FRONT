import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import "animate.css";

export const Contact = () => {
  const [text, setText] = useState("");

  const isMobile = window.innerWidth < 1200;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="part4">
      <section className="banner">
        <Container>
          <Row className="align-items-center">
            <Col xs={10} md={10} xl={8}>
              <h1>
                <span className="txt-rotate" dataPeriod="1000">
                  <span className="wrap">
                    대충 홍보.....
                    {text}
                  </span>
                </span>
              </h1>
              <p>
                {/* 홍보..홍보..홍보.. */}
                <br />
                <br />
                {/* 📑 지원 자격 */}
                <br />
                모집 기간: 08.24 - 08.31
                <br />
                모집 대상: 제한 없음
                <br />
                모집 인원: 제한 없음
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};
