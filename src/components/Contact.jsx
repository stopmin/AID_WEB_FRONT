import { useEffect } from "react";
import "animate.css";

export const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="part4">
      <section className="contact">
        <h1>AID 3기 많은 지원 부탁드립니다!</h1>
        <p>
          모집 기간 : 08.24 - 08.31
          <br />
          문의 메일 : aidpnu@gmail.com
          <br />
          전화번호 : 010-9425-1908
        </p>
      </section>
    </div>
  );
};
