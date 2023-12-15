
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const base_url = "https://supercoolac.alphanitesofts.net/api/";

export const advanceProductSearchApi = createApi({
    reducerPath:"advance-search",
    baseQuery:fetchBaseQuery({baseUrl: base_url}),
    endpoints:(builder)=>({
        getAdvanceProducts:builder.query({
            query:()=>({
                url:`advance_search_product`,
                method:"POST"
            }),
            transformResponse:(response) => {
                console.log(response,"response articles");
                return response;
            }
        }),
    })
})
export const {useGetAdvanceProductsQuery}=advanceProductSearchApi;