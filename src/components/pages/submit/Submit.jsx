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
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Name
            </label>
            <FormField
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="홍길동"
              required
            />
          </Col>
          <Col size={12} sm={6}>
            <label for="studnet_id" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Studnet ID
            </label>
            <FormField
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="student_id"
              value={formData.student_id}
              onChange={handleChange}
              placeholder="202012345"
              required
            />
          </Col>

          <Col size={12} sm={6}>
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Email
            </label>
            <div className="relative mb-6">
              <div className="absolute inset-y-0 left-0.5 flex items-center pl-3.5 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
              </div>
              <input
                type="text"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@pusan.ac.kr"
              />
            </div>
          </Col>

          <Col size={12} sm={6}>
            <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Phone
            </label>
            <FormField
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              placeholder="010-1234-5678"
              required
            />
          </Col>
        </Row>

        <label for="motivate" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          motive
        </label>
        <FormFieldTextArea
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          id="motivation"
          value={formData.motivation}
          onChange={handleChange}
          rows="3"
          name="motivation"
        />

        <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Project experience
        </label>
        <FormFieldTextArea
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          id="ai_exp"
          value={formData.ai_exp}
          onChange={handleChange}
          rows="3"
          name="have_project"
        />

        <label for="github" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Github
        </label>
        <FormField
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          id="github"
          value={formData.github}
          onChange={handleChange}
        />

        <label for="blog" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Blog
        </label>
        <FormField
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          id="blog"
          value={formData.blog}
          onChange={handleChange}
        />
        <Checkbox id="personal_info_agree" isChecked={checked} onChange={handleCheckboxChange}>
          개인 정보 수집 동의
        </Checkbox>
        <div className="submit-btn-container">
          <button type="submit" className={`submit-button ${!checked ? "disabled" : ""}`}>
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Submit;
