import Loading from "../../shared/ui/loading";
import ProductList from "../../entities/productList";
import ProductCard from "../../entities/productCard";

import { useGetProductsQuery } from "../../shared/api";
import { trimMockupData } from "../../shared/utils/mockupUtils";

import { IProduct } from "../../shared/types";

const ProductListLoader = () => {
  const { data, isLoading, error } = useGetProductsQuery<IProduct[] | any>(
    null
  );
  console.log(error);
  return (
    <>
      {error ? (
        <div className="w-100 h-100 p-5 bg-light fs-5 text-center">
          {error.status} {JSON.stringify(error.data)}
        </div>
      ) : (
        <ProductList>
          {isLoading ? (
            <Loading />
          ) : (
            data?.map((item: IProduct) => (
              <li className="list-group-item pe-3 pb-3 col" key={item.id}>
                <ProductCard content={trimMockupData(item.bodyHtml)} />
              </li>
            ))
          )}
        </ProductList>
      )}
    </>
  );
};

export default ProductListLoader;
