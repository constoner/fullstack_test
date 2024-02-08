import { ReactElement } from "react";

import Header from "../../widgets/header";
import Footer from "../../widgets/footer";

const MainLayout = ({ children }: { children: ReactElement }) => {
  return (
    <div className="position-relative d-flex flex-column min-vh-100">
      <Header />
      <main className="bg-light flex-grow-1 d-flex flex-column">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
