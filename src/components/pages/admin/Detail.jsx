import { React, useState } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";

const Detail = ({ post, closeModal }) => {
  const handlePassClick = async () => {
    // Pass 버튼을 누를 때 is_pass 값을 true로 변경
    const updatedFormData = {
      submit_id: post._id,
      status: true,
    };

    try {
      const response = await axios.post("https://pnuaid.com/api/admin/change_status", updatedFormData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${btoa("aidpnu2023:aidpnu99!@")}`,
        },
      });
      console.log("Status changed successfully:", response.data);
      closeModal();
    } catch (error) {
      console.error("Post error: ", error);
    }
  };

  const handleNoPassClick = async () => {
    // No-Pass 버튼을 누를 때 is_pass 값을 false로 변경
    const updatedFormData = {
      submit_id: post._id,
      status: false,
    };

    try {
      const response = await axios.post("https://pnuaid.com/api/admin/change_status", updatedFormData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${btoa("aidpnu2023:aidpnu99!@")}`,
        },
      });
      console.log("Status changed successfully:", response.data);
      closeModal();
    } catch (error) {
      console.error("Post error: ", error);
    }
  };

  return (
    <div
      id="staticModal"
      data-modal-backdrop="static"
      tabindex="-1"
      area-hidden="true"
      class="opacity-90 fixed inset-0 flex justify-center items-center w-full p-w overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full "
    >
      <div class="relative w-full max-w-2xl max-h-full">
        {/* Modal Content */}
        <div class="relative rounded-lg shadow bg-gray-700">
          {/* Modal Header */}
          <div class="flex items-start justify-between p-4 border-b rounded-t border-gray-600">
            <h3 class="text-xl font-semibold  text-white">Application</h3>
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
          {/* Modal body */}
          <div class="p-6 space-y-6">
            <Row>
              <Col size={12} sm={6}>
                <label for="name" class="block mb-2 text-sm font-medium  text-white ">
                  Name
                </label>
                <input
                  type="text"
                  id="disabled-input"
                  aria-label="disabled input"
                  class="mb-6  border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-400 focus:ring-blue-500 focus:border-blue-500"
                  value={post.name}
                  disabled
                ></input>
              </Col>
              <Col size={12} sm={6}>
                <label for="studnet_id" class="block mb-2 text-sm font-medium  text-white">
                  Studnet ID
                </label>
                <input
                  type="text"
                  id="disabled-input"
                  aria-label="disabled input"
                  class="mb-6  border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-400 focus:ring-blue-500 focus:border-blue-500"
                  value={post.student_id}
                  disabled
                ></input>
              </Col>{" "}
              <Col size={12} sm={6}>
                <label for="email" class="block mb-2 text-sm font-medium  text-white ">
                  Email
                </label>
                <input
                  type="text"
                  id="disabled-input"
                  aria-label="disabled input"
                  class="mb-6  border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-400 focus:ring-blue-500 focus:border-blue-500"
                  value={post.email}
                  disabled
                ></input>
              </Col>
              <Col size={12} sm={6}>
                <label for="phone" class="block mb-2 text-sm font-medium  text-white">
                  Phone
                </label>
                <input
                  type="text"
                  id="disabled-input"
                  aria-label="disabled input"
                  class="mb-6  border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-400 focus:ring-blue-500 focus:border-blue-500"
                  value={post.phone_number}
                  disabled
                ></input>
              </Col>
            </Row>
            <label for="motivate" class="block mb-2 text-sm font-medium  text-white">
              Motive
            </label>
            <textarea
              id="disabled-input"
              aria-label="disabled input"
              rows="4"
              class="block p-2.5 w-full text-sm  bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 cursor-not-allowed bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-400 focus:ring-blue-500 focus:border-blue-500"
              value={post.motivation}
              disabled
            ></textarea>
            <label for="project_experience" class="block mb-2 text-sm font-medium  text-white">
              Project experience
            </label>
            <textarea
              id="disabled-input"
              aria-label="disabled input"
              rows="4"
              class="block p-2.5 w-full text-sm  bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 cursor-not-allowed bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-400 focus:ring-blue-500 focus:border-blue-500"
              value={post.ai_exp}
              disabled
            ></textarea>
            <label for="github" class="block mb-2 text-sm font-medium  text-white">
              Github
            </label>
            <input
              type="text"
              id="disabled-input"
              aria-label="disabled input"
              class="mb-6  border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-400 focus:ring-blue-500 focus:border-blue-500"
              value={post.github}
              disabled
            ></input>
            <label for="github" class="block mb-2 text-sm font-medium  text-white">
              Blog
            </label>
            <input
              type="text"
              id="disabled-input"
              aria-label="disabled input"
              class="mb-6  border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-400 focus:ring-blue-500 focus:border-blue-500"
              value={post.phone_number}
              disabled
            ></input>
          </div>

          {/* <h2 className="text-black">{post.name}</h2>
          <p>{post.email}</p> */}
          {/* Other details you want to display */}

          <div class="flex items-center p-6 space-x-2 border-t rounded-b border-gray-600">
            <button
              data-modal-hide="staticModal"
              onClick={() => {
                handlePassClick();
                closeModal();
              }}
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
            >
              Pass
            </button>
            <button
              data-modal-hide="staticModal"
              onClick={() => {
                handleNoPassClick();
                closeModal();
              }}
              type="button"
              class="  focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover: focus:z-10 bg-gray-700 text-gray-300 border-gray-500 hover:text-white hover:bg-gray-600 focus:ring-gray-600"
            >
              No-Pass
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
