import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const base_url = "https://supercoolac.alphanitesofts.net/api/";

export const searchProductApi = createApi({
    reducerPath:"search_product",
    baseQuery:fetchBaseQuery({baseUrl: base_url}),
    endpoints:(builder)=>({
        getSearchProducts:builder.query({
            query:()=>({
                url:`search_product`,
                method:"POST"
            }),
            transformResponse:(response) => {
                console.log(response,"search articles");
                return response;
            }
        }),
    })
})
export const {useGetSearchProductsQuery} = searchProductApi;