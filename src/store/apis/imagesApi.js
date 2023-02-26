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
        query: (term) => {
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
      fetchImageComments: builder.mutation({
        query: ({ imageId }) => {
          return {
            url: `/images/comments`,
            method: "POST",
            body: {
              imageId,
              type: "get",
            },
          };
        },
      }),
      sendImageComment: builder.mutation({
        query: ({ userId, imageId, comment, token, time }) => {
          return {
            url: `/images/comments`,
            method: "POST",
            body: {
              imageId,
              userId,
              comment,
              type: "comment",
              time,
            },
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };
        },
      }),
    };
  },
});

export const {
  useFetchImagesQuery,
  useFetchImageCommentsMutation,
  useSendImageCommentMutation,
} = imagesApi;
export { imagesApi };
