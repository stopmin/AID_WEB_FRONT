import React from "react";
import styled from "styled-components";
import "./assets/chat.css";

const ChatWapper = styled.div`
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
    <ChatWapper>
      <div className="Study">
        <Title>디스코드/오픈 채팅방 페이지입니다.</Title>
        <br />
        우리 동아리 디스코드에 참여하거나 오픈채팅방으로 문의할 수 있도록 만들고 싶습니다.
      </div>
    </ChatWapper>
  );
}

export default Study;
