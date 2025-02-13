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

export const { useGetArticlesQuery, useGetArticleBySlugQuery } = articlesApi;
