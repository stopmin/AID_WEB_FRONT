import React, { useState, useEffect } from "react";
import { Row, Col, Modal } from "react-bootstrap";
import Detail from "./Detail";
import Login from "./Login";

const List = ({ posts, username, password }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const openModal = (post) => {
    setSelectedPost(post);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedPost(null);
    setShowModal(false);
  };

  return (
    <div>
      <div class="p-5 mb-4 border border-gray-100 rounded-lg bg-gray-50 bg-gray-800 border-gray-700 bg-black">
        <Row>
          {posts.map((post, index) => (
            <Col class="mt-3 divide-y divider-gray-200 divide-gray-700" key={index} md={4} lg={3} className="mb-4">
              <div class="items-center block p-3 sm:flex hover:bg-gray-100 hover:bg-gray-700">
                <a onClick={() => openModal(post)}>
                  <div class="text-base font-normal">
                    <span class="font-medium text-gray-900 text-white">{post.name}</span>
                  </div>
                  <span class="inline-flex items-center text-xs font-normal text-gray-500 text-gray-400">
                    <svg class="w-2.5 h-2.5 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19ZM8.374 17.4a7.6 7.6 0 0 1-5.9-7.4c0-.83.137-1.655.406-2.441l.239.019a3.887 3.887 0 0 1 2.082 2.5 4.1 4.1 0 0 0 2.441 2.8c1.148.522 1.389 2.007.732 4.522Zm3.6-8.829a.997.997 0 0 0-.027-.225 5.456 5.456 0 0 0-2.811-3.662c-.832-.527-1.347-.854-1.486-1.89a7.584 7.584 0 0 1 8.364 2.47c-1.387.208-2.14 2.237-2.14 3.307a1.187 1.187 0 0 1-1.9 0Zm1.626 8.053-.671-2.013a1.9 1.9 0 0 1 1.771-1.757l2.032.619a7.553 7.553 0 0 1-3.132 3.151Z" />
                    </svg>
                    {post.email}
                  </span>
                </a>
              </div>
            </Col>
          ))}
        </Row>
      </div>
      {showModal && (
        <Modal show={showModal} onHide={closeModal}>
          <Detail post={selectedPost} closeModal={closeModal} username={username} password={password} />
        </Modal>
      )}
    </div>
  );
};

const PaginationSection = ({ totalPosts, currentPage, postsPerPage, paginate, currentPosts }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav aria-label="Page navigation example" className="text-center">
      <ul className="opacity-50 inline-flex -space-x-px text-base h-10">
        <li>
          <a
            href="#"
            onClick={() => {
              paginate(currentPage - 1);
            }}
            className="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white"
          >
            Previous
          </a>
        </li>
        {pageNumbers.map((number) => (
          <li key={number}>
            <a
              href="#"
              onClick={() => {
                paginate(number);
              }}
              className={`flex items-center justify-center px-4 h-10 leading-tight ${
                number === currentPage
                  ? "text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 bg-gray-700 text-white hover:text-white"
                  : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white"
              }`}
            >
              {number}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#"
            onClick={() => {
              paginate(currentPage + 1);
            }}
            className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white"
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

const ContentSection = ({ username, password, postsPerPage }) => {
  const [contentInfo, setContentInfo] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://pnuaid.com/api/admin/read_all";
      const base64encodedData = btoa(`${username}:${password}`);

      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Basic ${base64encodedData}`,
          },
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setIsLoaded(true);
        setItems(data);
        setContentInfo(data);
      } catch (error) {
        alert("아이디와 비밀번호가 잘못되었습니다.");
      }
    };

    fetchData();
  }, [username, password]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = items.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <List posts={currentPosts} password={password} username={username} />
      <nav>
        <PaginationSection totalPosts={contentInfo.length} currentPage={currentPage} postsPerPage={postsPerPage} paginate={paginate} />
      </nav>
    </div>
  );
};

export { ContentSection };
