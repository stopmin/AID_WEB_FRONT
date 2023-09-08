import "react-multi-carousel/lib/styles.css";

export const Skills = () => {
  return (
    <div className="part2">
      <section className="skill" id="skills">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="skill-bx wow zoomIn">
                <h2>Career</h2>
                {/* <p>동아리 활동 내용 목록은 다음과 같습니다.</p> */}
                <div className="content-container">
                  <div className="content-left">
                    <p>
                      <h3>활동 내용</h3>
                      - cs231n, 혼자 공부하는 머신러닝 딥러닝, 오디오 DSP 스터디 등의 스터디 진행 <br />
                      - 인공지능 대회 참여 <br />- 서비스 제작
                    </p>
                  </div>
                  <div className="content-right">
                    <p>
                      <h3>주요 활동</h3>
                      - 1개 이상 스터디 필수 참여
                      <br />
                      - 주기적으로 세미나 진행
                      <br />
                      - 대회/세미나/AI 관련 뉴스 알림
                      <br />⭐ 올해 취직한 Naver, NCSoft 현업자와의 멘토링
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
