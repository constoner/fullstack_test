import React from "react";

import Logo from "../../shared/ui/logo";
import Contacts from "../../shared/ui/contacts";

const Footer = () => {
  return (
    <footer className="bg-dark mt-auto">
      <div className="container p-3">
        <div className="d-flex justify-content-between">
          <Logo />
          <Contacts />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
