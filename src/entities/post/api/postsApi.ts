import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../../../config/api-config.ts';
import type { PostProps } from '../model/types.ts';

export const postsApi = createApi({
  reducerPath: 'postsApi',
  tagTypes: ['Posts', 'Post'],
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (build) => ({
    getAllPosts: build.query<PostProps[], void>({
      query: () => 'posts/',

      providesTags: ['Posts'],
    }),
    getPostById: build.query<PostProps, string>({
      query: (userId) => `posts/${userId}`,
      providesTags: (result, error, id) => {
        if (error) {
          console.error('Error occurred while loading post:', error);
        }
        return result ? [{ type: 'Post', id: id }] : [];
      },
    }),
    getPostsByUserId: build.query<PostProps[], number>({
      query: (userId) => `users/${userId}/posts`,
      providesTags: (result, error, id) => {
        if (error) {
          console.error('Error occurred while loading posts:', error);
        }
        return result ? [{ type: 'Posts', id: id }] : [];
      },
    }),
  }),
});

export const {
  useGetAllPostsQuery,
  useGetPostByIdQuery,
  useGetPostsByUserIdQuery,
} = postsApi;
