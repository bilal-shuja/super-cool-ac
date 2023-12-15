import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const base_url = "https://supercoolac.alphanitesofts.net/api/";

export const productByIdApi = createApi({
    reducerPath: "products",
    baseQuery: fetchBaseQuery({ baseUrl: base_url }),
    endpoints: (builder) => ({
        getProductById: builder.query({
            query: (id) => ({
                url: `fetch_product_by_id/${id}`,
                method: "POST"
            }),
            transformResponse: (response) => {
                console.log(response, "response articles");
                // You need to return the transformed data here
                return response;
            }
        }),
    })
});
export const {useGetProductByIdQuery}=productByIdApi;