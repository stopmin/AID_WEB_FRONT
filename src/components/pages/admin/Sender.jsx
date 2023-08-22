import React from "react";
import { Container } from "react-bootstrap";

const Sender = () => {
  return (
    <div className="flex justify-center items-center">
      <section className="banner">
        <Container>
          <div className="text-center font-bold text-3xl">Send mail to applicants</div>
          <div>
            <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Title:
            </label>
            <input
              type="text"
              id="default-input"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />

            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Message:
            </label>
            <textarea
              id="message"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your message here.."
            ></textarea>
          </div>
          <div className="text-center mt-4">
            <button className="opacity-50 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Send</button>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Sender;
