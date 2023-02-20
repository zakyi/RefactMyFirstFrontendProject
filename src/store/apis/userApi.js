import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const userApi = createApi({
  reducerPath: "user",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
  }),
  endpoints(builder) {
    return {
      fetchUser: builder.mutation({
        query: (email) => {
          return {
            method: "POST",
            url: `users/loginUser`,
            body: {
              email,
            },
          };
        },
      }),
      addUser: builder.mutation({
        query: (data) => {
          return {
            method: "POST",
            url: `users/addUser`,
            body: data,
          };
        },
      }),
    };
  },
});

export const { useFetchUserMutation, useAddUserMutation } = userApi;
export { userApi };
