import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import axios from "axios";
import { FormField, FormFieldTextArea } from "../pages/submit/Submit";

Modal.setAppElement("#root");

const ModalExample = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [text, setText] = useState("");
  const [submit_id, setSubmitId] = useState("");
  const [applicantData, setApplicantData] = useState(null);

  useEffect(() => {
    console.log(submit_id);

    if (submit_id) {
      axios
        .get(`https://pnuaid.com/api/submit/read?submit_id=${submit_id}`)
        .then((response) => {
          setApplicantData(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error("GET error:", error);
          setApplicantData(null);
        });
    } else {
      setApplicantData(null);
    }
  }, [submit_id]);

  const openModal = () => {
    setModalIsOpen(true);
    setSubmitId("");
    setApplicantData(null);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onClick = async () => {
    setSubmitId(text);
  };

  const updateApplicantData = async () => {
    try {
      await axios.put(`https://pnuaid.com/api/submit/modify?submit_id=${submit_id}`, applicantData);
      console.log("PUT success");
      const result = axios.get(`https://pnuaid.com/api/submit/read?submit_id=${submit_id}`);
      console.log(result);
      closeModal();
    } catch (error) {
      console.error("PUT error:", error);
    }
  };

  const deleteApplicantData = async () => {
    try {
      await axios.delete(`https://pnuaid.com/api/submit/cancle?submit_id=${submit_id}`);
      console.log("DELETE success");
      closeModal();
      setSubmitId("");
      setApplicantData(null);
      // const result = axios.get(`https://pnuaid.com/api/submit/read?submit_id=${submit_id}`);
      // console.log(result);
    } catch (error) {
      console.error("DELETE error:", error);
    }
  };

  return (
    <div>
      <button onClick={openModal}>내 지원서 수정하기</button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <h2>지원서 수정</h2>
        <div>내 지원서 조회: </div>
        <div>
          <input type="text" id="applicant_id" placeholder="ID를 입력해주세요" onChange={onChange}></input>
          <button onClick={onClick}>조회하기</button>
          {/* <p>입력값: {submit_id}</p> */}
        </div>

        {!applicantData ? (
          <p>지원서 내용을 조회해주세요.</p>
        ) : (
          <>
            <h3>내 지원서</h3>
            <form>
              <FormField
                label="이름"
                id="name"
                value={applicantData.name}
                onChange={(e) => setApplicantData({ ...applicantData, name: e.target.value })}
                placeholder="홍길동"
                required
              />
              <FormField
                label="이메일"
                id="email"
                value={applicantData.email}
                onChange={(e) => setApplicantData({ ...applicantData, email: e.target.value })}
                placeholder="test@naver.com"
                required
              />
              <FormField
                label="학번(9자리)"
                id="student_id"
                value={applicantData.student_id}
                onChange={(e) => setApplicantData({ ...applicantData, student_id: e.target.value })}
                placeholder="202012345"
                required
              />
              <FormFieldTextArea
                label="동아리 지원 계기(공백 포함 500자 이내)"
                id="motivation"
                value={applicantData.motivation}
                onChange={(e) => setApplicantData({ ...applicantData, motivation: e.target.value })}
                rows="3"
                name="motivation"
              />
              <FormFieldTextArea
                label="프로젝트 경험"
                id="ai_exp"
                value={applicantData.ai_exp}
                onChange={(e) => setApplicantData({ ...applicantData, ai_exp: e.target.value })}
                rows="3"
                name="have_project"
              />
              <FormField
                label="Github 주소"
                id="github"
                value={applicantData.github}
                onChange={(e) => setApplicantData({ ...applicantData, github: e.target.value })}
              />
              <FormField
                label="Blog 주소(Tech Blog)"
                id="blog"
                value={applicantData.blog}
                onChange={(e) => setApplicantData({ ...applicantData, blog: e.target.value })}
              />
            </form>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
              <button onClick={updateApplicantData}>재등록</button>
              <button onClick={deleteApplicantData}>지원서 삭제</button>
            </div>
          </>
        )}
      </Modal>
    </div>
  );
};

export default ModalExample;
