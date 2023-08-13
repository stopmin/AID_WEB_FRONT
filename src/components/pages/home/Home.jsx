import React, { useState, useEffect } from "react";
import TechIcons from "./assets/TechIcons.jsx";
import "./assets/home.css";

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

  return (
    <div className="container">
      <div className="part1">
        <div> 동아리 소개 1</div>
        <div className="typing-svg-container">
          <svg width="435" height="50" xmlns="http://www.w3.org/2000/svg">
            <text x="10" y="30" font-family="Fira Code" font-size="20" fill="#000">
              {typingText}
            </text>
          </svg>
        </div>
        <TechIcons />
      </div>
      <div className="part2">동아리 소개 2</div>
      <div className="part3">동아리 소개 3</div>
      <div className="part4">동아리 소개 4</div>
    </div>
  );
};

export default Home;
