import React, { useState, useEffect } from "react";
import "./assets/page2.css";
import Dacon from "./assets/dacon.png";
import Kaggle from "./assets/kaggle.png";
import AI from "./assets/ai.png";

const Page1 = () => {
  return (
    <div>
      <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
      <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      <div className="half-Introduction">
        <div className="Title">Introduction</div>

        <div className="introduction_list">
          <br />
          반갑습니다, 정보컴퓨터공학부 인공지능 동아리 AID입니다!
          <br />
          <br />
          AID는 AI Developer의 약자로, 인공지능에 관심있는 사람들과 함께 공부하며 스스로 발전해나가는 동아리입니다. 최종적으로 서비스/프로젝트 제작을 목표로
          합니다.
          <br />
          <br />
          현재 운영중인 스터디는 대략적으로 사진과 같고, 자세한 내용은 뒷 페이지로 스크롤을 내려 확인해주세요😄
          <br />
          <br />
          📑 지원 자격
          <br />
          ✔️ AI에 관심이 있으신 분
          <br />
          ✔️ 프로젝트 경험이 있으신 분
          <br />
          ✔️ 열정적으로 참여할 의지가 있으신 분
        </div>
      </div>
      <script>AOS.init();</script>
      <div className="half-Icon">
        <div className="Title">
          <img className={"Dacon"} src={Dacon} alt="Dacon" />
          <img className={"Kaggle"} src={Kaggle} alt="Kaggle" /> {/* 이미지 삽입 */}
          <img className={"AI"} src={AI} alt="AI" /> {/* 이미지 삽입 */}
        </div>
      </div>
    </div>
  );
};

export default Page1;
