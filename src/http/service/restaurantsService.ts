import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../../store/store";

// Define a service using a base URL and expected endpoints
export const restaurantApi = createApi({
  // tagTypes: ["Products"],
  reducerPath: "restaurantApi",

  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_URL}/api/restaurant/`,
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
    getAllRestaurant: builder.query({
      query: () => `/g`,
      // providesTags: (result) =>
      //   result.rows
      //     ? [
      //         ...result.rows.map(({ id }: any) => ({ type: "Products", id })),
      //         { type: "Products", id: "PRODUCT" },
      //       ]
      //     : [{ type: "Products", id: "PRODUCT" }],
    }),
    addRestaurant: builder.mutation({
      query: (body)=> ({url: "/c", method: "POST", body})
    })
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllRestaurantQuery, useAddRestaurantMutation } = restaurantApi;
