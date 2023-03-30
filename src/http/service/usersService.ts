import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../../store/store";
import { IProduct, IProductsResponse } from "../../types/products";
// import showNotification from "../../utils/showNotification";
// import type { Pokemon } from './types'


// Define a service using a base URL and expected endpoints
export const usersApi = createApi({
  // tagTypes: ["Products"],
  reducerPath: "usersApi",

  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_URL}/api/user/`,
    prepareHeaders: (headers, { getState }) => {
      // By default, if we have a token in the store, let's use that for authenticated requests
      const token = (getState() as RootState).appSlice.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: (page) => `/all?page=${page}`,
      // providesTags: (result) =>
      //   result.rows
      //     ? [
      //         ...result.rows.map(({ id }: any) => ({ type: "Products", id })),
      //         { type: "Products", id: "PRODUCT" },
      //       ]
      //     : [{ type: "Products", id: "PRODUCT" }],
    }),
    
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAllUsersQuery
} = usersApi;
