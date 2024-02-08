import Products from "../../widgets/products";

const Home = () => {
  return (
    <>
      <div className=" py-5 bg-primary-subtle">
        <div className="container">
          <h1 className="fw-bold text-center text-dark-emphasis">Products</h1>
        </div>
      </div>
      <div className="container py-3">
        <Products />
      </div>
    </>
  );
};

export default Home;
