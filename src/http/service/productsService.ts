import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../../store/store";
import { IProduct, IProductsResponse } from "../../types/products";
// import showNotification from "../../utils/showNotification";
// import type { Pokemon } from './types'

// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
  tagTypes: ["Products"],
  reducerPath: "productsApi",

  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_URL}/api/products/`,
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
        query: ({
          about,
          discount,
          img,
          name,
          price,
          ingredients,
          productsGroupId,
        }) => {
          const formData = new FormData();
          formData.append("name", name);
          formData.append("about", about);
          formData.append("price", price);
          formData.append("discount", discount);
          formData.append("ingredients", ingredients);
          formData.append("productsGroupId", productsGroupId);
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
        // onSuccess: (data:any)=>{
        //   showNotification("success", "ggg", "gggggg");
        // }
      }
    ),
    deleteProduct: builder.mutation({
      query: (id) => {
        return {
          url: `/product?id=${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: [{ type: "Products", id: "PRODUCT" }],
    }),
    getProductByName: builder.query({
      query: (name) => `product/${name}`,
    }),
    addGroupOfProduct: builder.mutation({
      query: (body) => ({ url: "/group_of_products", method: "POST", body }),
    }),
    getGroupOfProducts: builder.query({
      query: () => ({ url: "/group_of_products" }),
    }),
    getGroupByProducts: builder.query({
      query: ({ limit, page }) => ({
        url: `/products_by_group?limit=${limit}&page=${page}`,
      }),
    }),
    addRecipeOfProduct: builder.mutation({
      query: (body) => {
        const formData = new FormData();
        formData.append("name", body.name);
        formData.append("price", body.price);
        for (const key of Object.keys(body.img)) {
          formData.append("img", body.img[key]);
        }
        return { url: "/recipe_of_products", method: "POST", body: formData };
      },
    }),
    getRecipeOfProducts: builder.query({
      query: () => ({ url: "/recipe_of_products" }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetProductByNameQuery,
  useAddProductMutation,
  useGetAllProductsQuery,
  // useLazyGetAllProductsQuery,
  useAddGroupOfProductMutation,
  useAddRecipeOfProductMutation,
  useGetGroupOfProductsQuery,
  useGetRecipeOfProductsQuery,
  useGetGroupByProductsQuery,
  useDeleteProductMutation,
} = productsApi;
