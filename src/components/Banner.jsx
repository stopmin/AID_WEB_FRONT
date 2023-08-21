import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import TrackVisibility from "react-on-screen";
import "animate.css";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Welcome to AIDeveloper!"];

  const isMobile = window.innerWidth < 1200;

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    // if (!isDeleting && updatedText === fullText) {
    //   setIsDeleting(true);
    //   setIndex((prevIndex) => prevIndex - 1);
    //   setDelta(period);
    // } else
    if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="part1">
      <section className="banner">
        <Container>
          <Row className="aligh-items-center">
            <Col xs={12} md={7} xl={8}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <span className="tagline">부산대학교 인공지능 동아리</span>
                    <h1>
                      <span className="txt-rotate" dataPeriod="1000">
                        <span className="wrap">{text}</span>
                      </span>
                    </h1>
                    <p>
                      AID는 AI Developer의 약자로, 인공지능에 관심있는 사람들과 함께 공부하며 스스로 발전해나가는 동아리입니다. 최종적으로 서비스/프로젝트
                      제작을 목표로 합니다.
                      <br />
                      <br />
                      📑 지원 자격
                      <br />
                      ✔️ AI에 관심이 있으신 분
                      <br />
                      ✔️ 프로젝트 경험이 있으신 분
                      <br />
                      ✔️ 열정적으로 참여할 의지가 있으신 분
                    </p>
                  </div>
                )}
              </TrackVisibility>
            </Col>
            <Col xs={10} md={5} xl={4}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div className={isVisible && !isMobile ? "animate__animated animate__zoomIn" : ""}>
                    <img src={headerImg} alt="Imgage" />
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};
