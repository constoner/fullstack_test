import { ReactElement } from "react";

const ProductList = ({ children }: { children: ReactElement }) => {
  return (
    <ul className="w-100 h-100 m-0 p-0 row row-cols-1 row-cols-md-2 row-cols-xl-2 row-cols-xxl-3">
      {children}
    </ul>
  );
};

export default ProductList;
