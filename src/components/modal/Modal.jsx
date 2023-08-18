import { React, useState, useEffect } from "react";
import Modal from "react-modal";
import axios from "axios";

const ModalExample = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [text, setText] = useState("");
  const [submit_id, setSubmitId] = useState("");

  useEffect(() => {
    console.log(submit_id);
    // 여기에 submit_id가 변경될 때 수행하고 싶은 작업을 추가할 수 있습니다.
  }, [submit_id]);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onClick = () => {
    setSubmitId(text);
    console.log(submit_id); // 이 시점에서는 업데이트되기 전의 값이 출력됩니다.
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
          <p>입력값: {submit_id}</p>
        </div>

        <h3>내 지원서</h3>
        <button onClick={closeModal}>재등록</button>
      </Modal>
    </div>
  );
};

export default ModalExample;
