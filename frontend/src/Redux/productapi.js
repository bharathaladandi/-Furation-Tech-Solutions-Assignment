import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery( { baseUrl: `https://hilarious-kerchief-crab.cyclic.app/product?` }),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => "SelfCare",
        }),
    }),
});

export const { useGetAllProductsQuery } = productsApi;