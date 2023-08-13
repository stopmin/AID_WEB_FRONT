import React from "react";
import "./assets/submit.css";

const FormField = ({ label, id, ...props }) => (
  <div className="form-group">
    <label htmlFor={id}>{label}</label>
    <input type="text" className="form-control" id={id} {...props} />
  </div>
);

const FormFieldTextArea = ({ label, id, ...props }) => (
  <div className="form-group">
    <label htmlFor={id}>{label}</label>
    <textarea className="form-control" id={id} {...props} />
  </div>
);

const FormFieldSelect = ({ label, id, children, ...props }) => (
  <div className="form-group">
    <label htmlFor={id}>{label}</label>
    <select className="form-control" id={id} {...props}>
      {children}
    </select>
  </div>
);

const Submit = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // form 처리 로직 추가
  };

  return (
    <div className="form-container">
      <h2>동아리 지원서</h2>
      <form method="post" action="/submit" onSubmit={handleSubmit}>
        <FormField label="이름" id="username" placeholder="홍길동" required />
        <FormField label="이메일" id="email" placeholder="test@naver.com" required />
        <FormField label="학번(9자리)" id="student_id" placeholder="202012345" required />
        <FormFieldSelect label="Python Skill" id="python_skill" required>
          <option value="상">상(파이썬 작동원리를 이해하고, 구체적인 프로젝트 경험이 있음)</option>
          <option value="중">중(공식 reference 를 참고해 프로그램 제작이 가능)</option>
          <option value="하">하(파이썬 코드를 보고 대략적인 흐름 이해 가능)</option>
        </FormFieldSelect>
        <FormFieldTextArea label="동아리 지원 계기(공백 포함 500자 이내)" id="motivation" rows="3" name="motivation" />
        <FormFieldTextArea label="AI 관련 수강 과목(학교 수업이 아니어도 기재해주세요)" id="motivation" rows="3" name="motivation" />
        <FormFieldTextArea label="본인이 하고 싶은 스터디" id="motivation" rows="3" name="motivation" />
        <FormFieldTextArea label="본인이 해보고 싶은 프로젝트" id="motivation" rows="3" name="motivation" />
        <FormFieldTextArea label="본인의 진로" id="motivation" rows="3" name="motivation" />
        <FormFieldTextArea label="프로젝트 경험" id="motivation" rows="3" name="motivation" />
        <FormField label="Github 주소" id="motivation" />
        <FormField label="Blog 주소(Tech Blog)" id="motivation" />

        <div className="submit-btn-container">
          <button type="submit" className="w-btn w-btn-gra1 w-btn-gra-anim">
            제출하기
          </button>
        </div>
      </form>
    </div>
  );
};

export default Submit;
