import React from "react";

const Detail = ({ post, closeModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-md shadow-lg">
        <h2 className="text-black">{post.name}</h2>
        <p>{post.email}</p>
        {/* Other details you want to display */}
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default Detail;
