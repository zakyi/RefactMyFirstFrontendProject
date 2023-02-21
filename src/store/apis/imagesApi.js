import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const imagesApi = createApi({
  reducerPath: "images",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
  }),
  endpoints(builder) {
    return {
      fetchImages: builder.query({
        query: (term, token) => {
          return {
            url: `/search/${term}`,
            method: "GET",
            // mode: "no-cors",
            headers: {
              "Content-Type": "application/json",
            },
          };
        },
      }),
    };
  },
});

export const { useFetchImagesQuery } = imagesApi;
export { imagesApi };
