import { ReactElement } from "react";
import "./mockup.scss"; // classNames "product-card" and others added only for mockup data

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
