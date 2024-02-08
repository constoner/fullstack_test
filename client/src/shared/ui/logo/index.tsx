import "./style.scss";

const Logo = () => {
  return (
    <div className="logo">
      <a className="logo__link" href={process.env.PUBLIC_URL + "/"}>
        <p className="logo__text">Logo</p>
      </a>
    </div>
  );
};

export default Logo;
