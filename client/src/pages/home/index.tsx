import Products from "../../widgets/products";

const Home = () => {
  return (
    <>
      <div className="py-3 py-sm-5 bg-primary-subtle">
        <div className="container">
          <h1 className="fw-bold text-center text-dark-emphasis">Products</h1>
        </div>
      </div>
      <div className="position-relative container flex-grow-1 py-3 pe-0">
        <Products />
      </div>
    </>
  );
};

export default Home;
