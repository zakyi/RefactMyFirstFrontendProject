import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ROOT_URL } from "../../static/config";

const imagesApi = createApi({
  reducerPath: "images",
  baseQuery: fetchBaseQuery({
    baseUrl: `${ROOT_URL}:3005`,
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
