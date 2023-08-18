import { React, useState } from "react";
import Modal from "react-modal";
import axios from "axios";

const ModalExample = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // 팝업창 open
  const openModal = () => {
    setModalIsOpen(true);
  };

  // 팝업창 close
  const closeModal = () => {
    setModalIsOpen(false);
  };

  const [text, setText] = useState("");
  const [submit_id, setName] = useState("");

  // 입력한 값 text로 저장
  const onChange = (e) => {
    setText(e.target.value);
  };

  // 입력한 id로 axios를 통해 이전에 작성한 내역 get
  const onClick = () => {
    setName(text);
    console.log(submit_id);
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
          <p>입력값: {submit_id}</p> {/* id 있다고 가정했을 때 */}
        </div>

        <h3>내 지원서</h3>
        <button onClick={closeModal}>재등록</button>
      </Modal>
    </div>
  );
};

export default ModalExample;
