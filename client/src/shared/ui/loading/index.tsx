import React from "react";

const Loading = () => {
  return (
    <div
      className="loading position-absolute top-0 start-0 z-3 w-100 h-100 d-flex justify-content-center align-items-center bg-light"
      style={{ opacity: 0.9 }}
    >
      <p className="h1 text-secondary text-center">Loading...</p>
    </div>
  );
};

export default Loading;
