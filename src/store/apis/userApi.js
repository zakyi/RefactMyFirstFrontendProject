import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const userApi = createApi({
  reducerPath: "user",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
  }),
  endpoints(builder) {
    return {
      fetchUser: builder.mutation({
        query: (data) => {
          return {
            method: "POST",
            url: `users/loginUser`,
            body: data,
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
      verifyUser: builder.mutation({
        query: ({ token, ...data }) => {
          console.log(data);
          return {
            method: "POST",
            url: `users/verifyUser`,
            headers: {
              Authorization: `Bearer ${token}`,
            },
            body: data,
          };
        },
      }),
    };
  },
});

export const {
  useFetchUserMutation,
  useAddUserMutation,
  useVerifyUserMutation,
} = userApi;
export { userApi };
