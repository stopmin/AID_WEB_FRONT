import React from "react";
import styled from "styled-components";
import "./assets/study.css";

const StudyWrapper = styled.div`
  font-family: "SUITE-Regular";
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 7.5rem;
  padding: 5rem;
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: bolder;
`;

function Study() {
  return (
    <StudyWrapper>
      <div className="Study">
        <Title>이 페이지는 스터디 안내입니다.</Title>
        <br />
        스터디 나열...
      </div>
    </StudyWrapper>
  );
}

export default Study;
