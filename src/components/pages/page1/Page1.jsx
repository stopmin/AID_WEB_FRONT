// import React, { useState, useEffect } from "react";
import "./assets/page1.css";

const Page1 = () => {
  const daconImagePath = "./assets/dacon.png"; // 이미지 경로
  const kaggleImagePath = "./assets/dacon.png"; // 이미지 경로
  const aiImagePath = "./assets/ai.png"; // 이미지 경로

  return (
    <div>
      <div className="half-Introduction">동아리 활동 내용</div>
      <img src={daconImagePath} alt="Dacon" /> {/* 이미지 삽입 */}
      <img src={kaggleImagePath} alt="Kaggle" /> {/* 이미지 삽입 */}
      <img src={aiImagePath} alt="AI" /> {/* 이미지 삽입 */}
      <div className="half-Icon">Icons</div>
    </div>
  );
};

export default Page1;
