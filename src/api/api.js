import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const articlesApi = createApi({
  reducerPath: "articlesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://blog-platform.kata.academy/api",
  }),
  endpoints: (build) => ({
    getArticles: build.query({
      query: ({ offset, limit }) => ({
        url: "/articles",
        params: {
          offset,
          limit,
        },
      }),
    }),
    getArticleBySlug: build.query({
      query: (slug) => ({
        url: `/articles/${slug}`,
      }),
    }),
  }),
});

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://blog-platform.kata.academy/api",
    prepareHeaders: (headers, { getState }) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (build) => ({
    register: build.mutation({
      query: (userData) => ({
        url: "/users",
        method: "POST",
        body: userData,
      }),
    }),
    login: build.mutation({
      query: (credentials) => ({
        url: "/users/login",
        method: "POST",
        body: credentials,
      }),
    }),
    getCurrentUser: build.query({
      query: () => ({
        url: "/user",
      }),
    }),
    updateUser: build.mutation({
      query: (userData) => ({
        url: "/user",
        method: "PUT",
        body: userData,
      }),
    }),
  }),
});
export const { useGetArticlesQuery, useGetArticleBySlugQuery } = articlesApi;

export const {
  useRegisterMutation,
  useLoginMutation,
  useGetCurrentUserQuery,
  useUpdateUserMutation,
} = authApi;
