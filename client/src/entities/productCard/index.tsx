import "./style.scss";

const ProductCard = ({ content }: { content: string }) => {
  return (
    <li
      className="product-card"
      dangerouslySetInnerHTML={{
        __html: content,
      }}
    />
  );
};

export default ProductCard;
