import Logo from "../../shared/ui/logo";
import Contacts from "../../shared/ui/contacts";

const Footer = () => {
  return (
    <footer className="bg-dark mt-auto link-light link-opacity-50">
      <div className="container p-3">
        <div
          className="d-flex justify-content-between"
          style={{ "--bg-color": "var(--bs-dark)" } as React.CSSProperties}
        >
          <Logo />
          <Contacts />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
