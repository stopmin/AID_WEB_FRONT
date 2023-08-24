import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";
import axios from "axios";
import { FormField, FormFieldTextArea } from "../pages/submit/Submit";
import "./assets/modal.css";

Modal.setAppElement("#root");

export const ModalExample = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [text, setText] = useState("");
  const [submit_id, setSubmitId] = useState("");
  const [applicantData, setApplicantData] = useState(null);
  const [isDataFetched, setIsDataFetched] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    console.log(submit_id);

    if (submit_id) {
      axios
        .get(`https://pnuaid.com/api/submit/read?submit_id=${submit_id}`)
        .then((response) => {
          setApplicantData(response.data);
          setIsDataFetched(true);
          console.log(response.data);
        })
        .catch((error) => {
          console.error("GET error:", error);
          setApplicantData(null);
          setIsDataFetched(true);
          setErrorMessage("ID를 다시 확인해주세요.");
        });
    } else {
      setApplicantData(null);
      setIsDataFetched(false);
      setErrorMessage("");
    }
  }, [submit_id]);

  const openModal = () => {
    setModalIsOpen(true);
    setSubmitId("");
    setApplicantData(null);
    setIsDataFetched(false);
    setErrorMessage("");
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onClick = async () => {
    setSubmitId(text);
    setIsDataFetched(false);
  };

  const updateApplicantData = async () => {
    try {
      await axios.put(`https://pnuaid.com/api/submit/modify?submit_id=${submit_id}`, applicantData);
      console.log("PUT success");
      const result = axios.get(`https://pnuaid.com/api/submit/read?submit_id=${submit_id}`);
      console.log(result);
      closeModal();
      alert("수정이 완료되었습니다.");
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
      setIsDataFetched(false);
      setErrorMessage("");
      alert("삭제가 완료되었습니다.");
      // const result = axios.get(`https://pnuaid.com/api/submit/read?submit_id=${submit_id}`);
      // console.log(result);
    } catch (error) {
      console.error("DELETE error:", error);
    }
  };

  return (
    <div>
      <button className="no-underline" onClick={openModal}>
        내 지원서 수정하기
      </button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} overlayClassName="overlay-modal" className="modal">
        <div class="relative rounded-lg shadow bg-gray-700 h-full w-full max-w-screen-lg p-6  max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div class="flex items-center justify-between p-2 border-b rounded-t border-gray-600">
            <h3 class="text-xl font-semibold text-white">지원서 수정</h3>
            <button
              type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover: rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center hover:bg-gray-600 hover:text-white"
              data-modal-hide="staticModal"
              onClick={closeModal}
            >
              <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <div className="submit-check">
            <input type="text" id="applicant_id" placeholder="ID를 입력해주세요" onChange={onChange}></input>
            <button onClick={onClick} className="button-modal search">
              조회하기
            </button>
          </div>

          {errorMessage && !applicantData && <p>{errorMessage}</p>}
          {!errorMessage && !isDataFetched && <p>지원서 내용을 조회해주세요.</p>}
          {applicantData && (
            <>
              <div class="p-6 max-w-screen-lg w-full">
                <Row>
                  <Col size={12} sm={6}>
                    <label for="name" class="block mb-2 text-sm font-medium  text-white ">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      class="mb-6  border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-400 focus:ring-blue-500 focus:border-blue-500"
                      value={applicantData.name}
                      onChange={(e) => setApplicantData({ ...applicantData, name: e.target.value })}
                      placeholder="홍길동"
                      required
                    ></input>
                  </Col>
                  <Col size={12} sm={6}>
                    <label for="email" class="block mb-2 text-sm font-medium  text-white ">
                      Email
                    </label>
                    <input
                      type="text"
                      id="email"
                      class="mb-6  border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-400 focus:ring-blue-500 focus:border-blue-500"
                      value={applicantData.email}
                      onChange={(e) => setApplicantData({ ...applicantData, email: e.target.value })}
                      placeholder="test@naver.com"
                      required
                    ></input>
                  </Col>
                  <Col size={12} sm={6}>
                    <label for="student_id" class="block mb-2 text-sm font-medium  text-white ">
                      Studnet ID
                    </label>
                    <input
                      type="text"
                      id="student_id"
                      class="mb-6  border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-400 focus:ring-blue-500 focus:border-blue-500"
                      value={applicantData.student_id}
                      onChange={(e) => setApplicantData({ ...applicantData, student_id: e.target.value })}
                      placeholder="202012345"
                      required
                    ></input>
                  </Col>
                  <Col size={12} sm={6}>
                    <label for="phone_number" class="block mb-2 text-sm font-medium  text-white ">
                      Phone
                    </label>
                    <input
                      type="text"
                      id="phone_number"
                      class="mb-6  border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-400 focus:ring-blue-500 focus:border-blue-500"
                      value={applicantData.phone_number}
                      onChange={(e) => setApplicantData({ ...applicantData, phone_number: e.target.value })}
                      placeholder="010-1234-5678"
                      required
                    ></input>
                  </Col>
                </Row>
                <label for="motivate" class="block mb-2 text-sm font-medium  text-white ">
                  Motive
                </label>
                <textarea
                  id="motivation"
                  rows="4"
                  class="mb-6 block p-2.5 w-full text-sm  bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-400 focus:ring-blue-500 focus:border-blue-500"
                  value={applicantData.motivation}
                  onChange={(e) => setApplicantData({ ...applicantData, motivation: e.target.value })}
                  required
                ></textarea>
                <label for="ai_exp" class="block mb-2 text-sm font-medium  text-white ">
                  Project experience
                </label>
                <textarea
                  id="ai_exp"
                  rows="4"
                  class="mb-6 block p-2.5 w-full text-sm  bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-400 focus:ring-blue-500 focus:border-blue-500"
                  value={applicantData.ai_exp}
                  onChange={(e) => setApplicantData({ ...applicantData, ai_exp: e.target.value })}
                  required
                ></textarea>
                <label for="github" class="block mb-2 text-sm font-medium  text-white ">
                  Github
                </label>
                <textarea
                  id="github"
                  rows="4"
                  class="mb-6 block p-2.5 w-full text-sm  bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-400 focus:ring-blue-500 focus:border-blue-500"
                  value={applicantData.github}
                  onChange={(e) => setApplicantData({ ...applicantData, github: e.target.value })}
                  required
                ></textarea>
                <label for="blog" class="block mb-2 text-sm font-medium  text-white ">
                  Blog
                </label>
                <textarea
                  id="blog"
                  rows="4"
                  class="block p-2.5 w-full text-sm  bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-400 focus:ring-blue-500 focus:border-blue-500"
                  value={applicantData.blog}
                  onChange={(e) => setApplicantData({ ...applicantData, blog: e.target.value })}
                  required
                ></textarea>
                <div className="button-flex">
                  <button className="button-modal" onClick={deleteApplicantData}>
                    지원서 삭제
                  </button>
                  <button className="button-modal" onClick={updateApplicantData}>
                    수정
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </Modal>
    </div>
  );
};
