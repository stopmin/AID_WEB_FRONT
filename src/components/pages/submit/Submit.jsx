import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import "./assets/submit.css";

const FormField = ({ label, id, value, onChange, ...props }) => (
  <div className="form-group">
    <label htmlFor={id}>{label}</label>
    <input type="text" className="form-control" id={id} value={value} onChange={onChange} {...props} />
  </div>
);

const FormFieldTextArea = ({ label, id, value, onChange, ...props }) => (
  <div className="form-group">
    <label htmlFor={id}>{label}</label>
    <textarea className="form-control" id={id} value={value} onChange={onChange} {...props} />
  </div>
);

const FormFieldSelect = ({ label, id, children, value, onChange, ...props }) => (
  <div className="form-group">
    <label htmlFor={id}>{label}</label>
    <select className="form-control" id={id} value={value} onChange={onChange} {...props}>
      {children}
    </select>
  </div>
);

const Checkbox = ({ id, children, value, isChecked, onChange }) => (
  <div className="checkbox">
    <label htmlFor={id}></label>
    <input type="checkbox" id={id} value={value} checked={isChecked} onChange={({ target: { checked } }) => onChange(checked)} />
    {children}
  </div>
);

export { FormField, FormFieldTextArea, FormFieldSelect, Checkbox };

const Submit = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    student_id: "",
    phone_number: "",
    motivation: "",
    github: "",
    blog: "",
    ai_exp: "",
    personal_info_agree: false,
  });

  const [checked, setChecked] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!checked) {
      alert("개인 정보 수집 동의에 체크해주세요.");
      return;
    }

    try {
      const response = await axios.post("https://pnuaid.com/api/submit/create", formData);
      console.log("POST success:", response.data);
      navigate("/");
      alert("지원이 성공되었습니다.");
    } catch (error) {
      console.error("POST error:", error);
      /* 이메일 양식 확인 이외의 예외 처리 필요! */
      alert("이메일 양식을 지켜주세요!");
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleCheckboxChange = (isChecked) => {
    setChecked(isChecked);
    setFormData((prevFormData) => ({
      ...prevFormData,
      personal_info_agree: isChecked,
    }));
  };

  return (
    <div className="form-container">
      <h2>AIDeveloper application</h2>
      <form method="post" action="/submit" onSubmit={handleSubmit} className="flex-form">
        <Row>
          <Col size={12} sm={6}>
            <FormField label="이름" id="name" value={formData.name} onChange={handleChange} placeholder="홍길동" required />
          </Col>
          <Col size={12} sm={6}>
            <FormField label="학번(9자리)" id="student_id" value={formData.student_id} onChange={handleChange} placeholder="202012345" required />
          </Col>
          <Col size={12} sm={6}>
            <FormField label="이메일" id="email" value={formData.email} onChange={handleChange} placeholder="test@naver.com" required />
          </Col>
          <Col size={12} sm={6}>
            <FormField label="전화번호" id="phone_number" value={formData.phone_number} onChange={handleChange} placeholder="010-1123-41234" required />
          </Col>
        </Row>
        <FormFieldTextArea
          label="동아리 지원 계기(공백 포함 500자 이내)"
          id="motivation"
          value={formData.motivation}
          onChange={handleChange}
          rows="3"
          name="motivation"
        />
        <FormFieldTextArea label="프로젝트 경험" id="ai_exp" value={formData.ai_exp} onChange={handleChange} rows="3" name="have_project" />
        <FormField label="Github 주소" id="github" value={formData.github} onChange={handleChange} />
        <FormField label="Blog 주소(Tech Blog)" id="blog" value={formData.blog} onChange={handleChange} />
        <Checkbox id="personal_info_agree" isChecked={checked} onChange={handleCheckboxChange}>
          개인 정보 수집 동의
        </Checkbox>
        <div className="submit-btn-container">
          <button type="submit" className={`submit-button ${!checked ? "disabled" : ""}`}>
            제출하기
          </button>
        </div>
      </form>
    </div>
  );
};

export default Submit;
