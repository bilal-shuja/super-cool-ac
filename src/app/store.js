import { configureStore,} from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { productApi } from "../features/ProductSlice/ProductSlice";
import { advanceProductSearchApi } from "../features/ProductSlice/AdvanceSearchSlice";
import { productByIdApi } from "../features/ProductSlice/ProductByIdSlice";

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]:productApi.reducer,
    [advanceProductSearchApi.reducerPath]:advanceProductSearchApi.reducer,
    [productByIdApi.reducerPath]:productByIdApi.reducer,
  },
  middleware:(getDefaultMiddleware)=>
  getDefaultMiddleware().concat(
    productApi.middleware,
    advanceProductSearchApi.middleware,
    productByIdApi.middleware,
    )
});

setupListeners(store.dispatch);
