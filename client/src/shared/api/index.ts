import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import * as API from "./externalApi";

const appApi = createApi({
  reducerPath: "appApi",

  baseQuery: fetchBaseQuery({ baseUrl: API.baseUrl }),

  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => API.allProductsUrl,

      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },

      merge: (currentCache, newItems) => {
        currentCache.results.push(...newItems.results);
      },

      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
  }),
});

const { useGetProductsQuery } = appApi;

export { appApi, useGetProductsQuery };
