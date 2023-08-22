import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ContentSection } from "./List"; // ContentSection 컴포넌트를 불러옴

const Admin = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="part1">
      <section className="banner">
        <Container>
          <div className="text-xl">This is Admin Page</div>
          <Link to="/admin/send">
            <button class="opacity-50 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Send Mail</button>
          </Link>
          <ContentSection currentPage={currentPage} postsPerPage={postsPerPage} />
        </Container>
      </section>
    </div>
  );
};

export default Admin;
