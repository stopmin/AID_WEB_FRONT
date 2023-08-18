import React, { useState, useEffect } from "react";
import TechIcons from "./assets/TechIcons.jsx";
import Page2 from "../page2/Page2.jsx";
import "./assets/home.css";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS 스타일 시트를 불러옵니다.

const Home = () => {
  const [typingText, setTypingText] = useState("");
  const originalText = "AID WEB에 오신 것을 환영합니다!";

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < originalText.length) {
        setTypingText(originalText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100); // 타이핑 속도 조절을 위한 간격

    return () => clearInterval(typingInterval);
  }, []);

  // AOS 초기화
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="container">
      <div className="part1">
        <div className="typing-svg-container">
          <h2>Simple Is The BEST</h2>
          <svg width="435" height="50" xmlns="http://www.w3.org/2000/svg">
            <text x="10" y="30" font-family="Fira Code" font-size="20" fill="#000">
              {typingText}
            </text>
          </svg>
        </div>
      </div>
      <div className="part2">
        {" "}
        {/* part2에 AOS 적용 */}
        <Page2 />
      </div>
      <div className="part3">
        {" "}
        <TechIcons />
      </div>
      <div className="part4">FAQ</div>
    </div>
  );
};

export default Home;
