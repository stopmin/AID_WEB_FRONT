import { React, useState, useEffect } from "react";
import { Row, Col, Pagination } from "react-bootstrap";

import axios from "axios";

const List = ({ posts }) => {
  return (
    <Row>
      {posts.map((post, index) => (
        <Col key={index} md={4}>
          <div>{post.title}</div>
          <div>{post.description}</div>
        </Col>
      ))}
    </Row>
  );
};

const PaginationSection = ({ contentInfo, currentPage, postsPerPage, paginate }) => {
  return (
    <Pagination>
      {Array.from({ length: Math.ceil(contentInfo.length / postsPerPage) }).map((_, index) => (
        <Pagination.Item key={index} onClick={() => paginate(index + 1)} active={index + 1 === currentPage}>
          {index + 1}
        </Pagination.Item>
      ))}
    </Pagination>
  );
};

const ContentSection = ({ postsPerPage }) => {
  const [contentInfo, setContentInfo] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Added this line

  const handlePostInfo = async () => {
    try {
      const response = await axios.get("https://pnuaid.com/api/admin/read_all");
      setContentInfo(response.data.reverse());
      alert("성공!");
    } catch (error) {
      console.error("GET error:", error);
    }
  };

  useEffect(() => {
    handlePostInfo();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = contentInfo.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <List posts={currentPosts} />
      <PaginationSection contentInfo={contentInfo} currentPage={currentPage} postsPerPage={postsPerPage} paginate={paginate} />
    </>
  );
};

export { ContentSection };
