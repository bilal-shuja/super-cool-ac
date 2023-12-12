import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const base_url = "https://supercoolac.alphanitesofts.net/api/";

export const productApi = createApi({
    reducerPath:"products",
    baseQuery:fetchBaseQuery({baseUrl: base_url}),
    endpoints:(builder)=>({
        getProducts:builder.query({
            query:()=>({
                url:`fetch_all_products`,
                method:"POST"
            }),
            transformResponse:(response) => {
                console.log(response,"response articles");
                return response;
            }
        }),
    })
})
export const {useGetProductsQuery}=productApi;