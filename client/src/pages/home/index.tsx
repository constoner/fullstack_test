import React from "react";

import Products from "../../widgets/products";

const Home = () => {
  return (
    <>
      <div className=" py-5 bg-primary-subtle flex-grow-1">
        <div className="container">
          <h1 className="fw-bold text-center text-dark-emphasis">Products</h1>
        </div>
      </div>
      <div className="container">
        <Products />
      </div>
    </>
  );
};

export default Home;
