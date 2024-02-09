import { ReactElement } from "react";
import "./style.scss";

const ProductCard = ({
  content,
  children,
}: {
  content: string;
  children: ReactElement;
}) => {
  return (
    <div className="product-card w-100 p-4 shadow-sm bg-light text-dark">
      <div className="product-card__content">
        <div className="product-card__image">{children}</div>
        <div
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        ></div>
      </div>
    </div>
  );
};

export default ProductCard;
