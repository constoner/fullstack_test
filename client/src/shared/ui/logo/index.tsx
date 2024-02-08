import React from "react";

const Logo = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center rounded-circle bg-light-subtle"
      style={{ width: "75px", height: "75px" }}
    >
      <a
        className="fs-3 fw-bold text-decoration-none link-danger link-opacity-50-hover"
        href={process.env.PUBLIC_URL + "/"}
      >
        Logo
      </a>
    </div>
  );
};

export default Logo;
