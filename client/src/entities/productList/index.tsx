import { ReactElement } from "react";

const ProductList = ({ children }: { children: ReactElement }) => {
  return <ul className="h-100 m-0 p-0">{children}</ul>;
};

export default ProductList;
