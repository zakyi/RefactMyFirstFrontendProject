import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const userApi = createApi({
  reducerPath: "user",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
  }),
  endpoints(builder) {
    return {
      fetchUser: builder.query({
        query: (userName) => {
          return { method: "GET", url: `/users/${userName}` };
        },
      }),
      addUser: builder.mutation({
        query: (userName, password) => {
          return {
            method: "POST",
            url: `/users/${userName}`,
            body: { userName: userName, password: password },
          };
        },
      }),
    };
  },
});

export const { useFetchUserQuery, useAddUserMutaion } = userApi;
export { userApi };
