import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Git & Python",
      description: "Git/Github 기초와 Python advanced skill",
      imgUrl: projImg1,
    },
    {
      title: "AI Study",
      description: "핸즈온 머신러닝, 밑바닥부터 시작하는 딥러닝\n- PyTorch 스터디\n- dacon, kaggle 실습",
      imgUrl: projImg2,
    },
    {
      title: "Project",
      description: "AID WEB(React, FastAPI)\n- 본인이 만들고 싶은 서비스 제작",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Curriculum</h2>
                  <p>다양한 스터디와 프로젝트를 운영하고 있으며, 기존에 없는 스터디 및 프로젝트도 직접 생성하고 모집할 수 있습니다.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content id="slideInUp">
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
