import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../../store/store";
import { IProduct, IProductsResponse } from "../../types/products";
// import type { Pokemon } from './types'

// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
  tagTypes: ["Products"],
  reducerPath: "productsApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api/products/",
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
    getAllProducts: builder.query({
      query: (page) => `/all?page=${page}`,
      providesTags: (result) =>
        result.rows
          ? [
              ...result.rows.map(({ id }: any) => ({ type: "Products", id })),
              { type: "Products", id: "PRODUCT" },
            ]
          : [{ type: "Products", id: "PRODUCT" }],
    }),
    addProduct: builder.mutation(
      /*<IProduct, Partial<IProduct>>*/ {
        query: ({ about, discount, img, name, price }) => {
          const formData = new FormData();
          formData.append("name", name);
          formData.append("about", about);
          formData.append("price", price);
          formData.append("discount", discount);
          for (const key of Object.keys(img)) {
            formData.append("img", img[key]);
          }
          return {
            url: `/`,
            method: "POST",

            body: formData,
          };
        },
        invalidatesTags: [{ type: "Products", id: "PRODUCT" }],
      }
    ),
    getProductByName: builder.query({
      query: (name) => `product/${name}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetProductByNameQuery,
  useAddProductMutation,
  useGetAllProductsQuery,
} = productsApi;
