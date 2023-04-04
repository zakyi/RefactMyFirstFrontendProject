import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ROOT_URL } from "../../static/config";

const userApi = createApi({
  reducerPath: "user",
  baseQuery: fetchBaseQuery({
    //nginx的域名
    baseUrl: `${ROOT_URL}:8443`,
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
      userAction: builder.mutation({
        query: ({ imageId, userEmail, type, token }) => {
          return {
            url: "/userAction",
            method: "post",
            body: {
              imageId,
              userEmail,
              type,
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
  useFetchUserMutation,
  useAddUserMutation,
  useVerifyUserMutation,
  useUserActionMutation,
} = userApi;
export { userApi };
