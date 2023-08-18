import { React, useState } from "react";
import "./assets/submit.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Modal } from "../../modal/Modal";

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

export { FormField, FormFieldTextArea, FormFieldSelect };

const Submit = () => {
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
    personal_info_agree: true,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
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

  return (
    <div className="form-container">
      <h2>동아리 지원서</h2>
      <form method="post" action="/submit" onSubmit={handleSubmit}>
        <FormField label="이름" id="name" value={formData.name} onChange={handleChange} placeholder="홍길동" required />
        <FormField label="이메일" id="email" value={formData.email} onChange={handleChange} placeholder="test@naver.com" required />
        <FormField label="학번(9자리)" id="student_id" value={formData.student_id} onChange={handleChange} placeholder="202012345" required />
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
