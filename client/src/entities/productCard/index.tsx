import "./style.scss";

const ProductCard = ({ content }: { content: string }) => {
  return (
    <div className="product-card w-100 p-4 shadow-sm bg-light text-dark">
      <div
        className="product-card__content"
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      />
    </div>
  );
};

export default ProductCard;
