import ProductList from "../../entities/productList";
import ProductCard from "../../entities/productCard";

import { useGetProductsQuery } from "../../shared/api";
import { trimMockupData } from "../../shared/utils/mockupUtils";

import { IProduct } from "../../shared/types";

const ProductListLoader = () => {
  const { data, isLoading } = useGetProductsQuery<IProduct[] | any>(null);

  return (
    <ProductList>
      {isLoading
        ? null
        : data?.map((item: IProduct) => (
            <ProductCard
              key={item.id}
              content={trimMockupData(item.bodyHtml)}
            />
          ))}
    </ProductList>
  );
};

export default ProductListLoader;
