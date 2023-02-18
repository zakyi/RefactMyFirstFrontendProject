import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const imagesApi = createApi({
  reducerPath: "images",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.unsplash.com",
  }),
  endpoints(builder) {
    return {
      fetchImages: builder.query({
        query: (term) => {
          console.log(term);
          return {
            url: "/search/photos",
            headers: {
              Authorization: "Client-ID ",
            },
            params: {
              query: term,
            },
            method: "GET",
          };
        },
      }),
    };
  },
});

export const { useFetchImagesQuery } = imagesApi;
console.log(useFetchImagesQuery);
console.log(imagesApi);
export { imagesApi };
