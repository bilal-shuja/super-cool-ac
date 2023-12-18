import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { productApi } from "../features/ProductSlice/ProductSlice";
import { advanceProductSearchApi } from "../features/ProductSlice/AdvanceSearchSlice";
import { productByIdApi } from "../features/ProductSlice/ProductByIdSlice";
import { searchProductApi } from "../features/ProductSlice/SearchProductSlice";

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    [advanceProductSearchApi.reducerPath]: advanceProductSearchApi.reducer,
    [productByIdApi.reducerPath]: productByIdApi.reducer,
    [searchProductApi.reducerPath]: searchProductApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      productApi.middleware,
      advanceProductSearchApi.middleware,
      productByIdApi.middleware,
      searchProductApi.middleware
    ),
});

setupListeners(store.dispatch);
