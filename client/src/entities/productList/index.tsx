import React from "react";

import { useGetProductsQuery } from "../../shared/api";

import { trimMockupData } from "../../shared/utils/mockupUtils";

interface IProduct {
  id: string;
  bodyHtml: string;
  imageSrc: string;
}

const ProductList = () => {
  const { data, isLoading } = useGetProductsQuery<IProduct[] | any>(1);

  return (
    <ul>
      {isLoading
        ? null
        : data?.map((item: IProduct) => (
            <li key={item.id}>
              <div
                dangerouslySetInnerHTML={{
                  __html: trimMockupData(item.bodyHtml),
                }}
              ></div>
            </li>
          ))}
    </ul>
  );
};

export default ProductList;
