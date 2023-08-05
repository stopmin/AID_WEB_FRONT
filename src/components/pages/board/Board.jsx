import React from "react";
import styled from "styled-components";
import "./assets/board.css";

const BoardWapper = styled.div`
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
    <BoardWapper>
      <div className="Study">
        <Title>스터디 게시판입니다.</Title>
        <br />
        세부 페이지를 작성하여야 합니다.
        <br />
        동아리 소개 페이지, 동아리 신청페이지 연결해야합니다.
      </div>
    </BoardWapper>
  );
}

export default Study;
