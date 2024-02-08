import React from "react";

import Logo from "../../shared/ui/logo";

const Header = () => {
  return (
    <header className="bg-light sticky-top shadow-sm">
      <div className="container p-3">
        <div className="d-flex justify-content-between align-items-center flex-wrap">
          <Logo />
          <p className="w-50 m-0 fs-5 text-dark-emphasis text-end">
            Junior Full-stack Developer CPB Test
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
