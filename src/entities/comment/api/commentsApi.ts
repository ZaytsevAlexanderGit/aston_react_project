import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../../../config/api-config.ts';
import type { CommentProps } from '../types/types.ts';

export const commentsApi = createApi({
  reducerPath: 'commentsApi',
  tagTypes: ['Comments'],
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (build) => ({
    getAllComments: build.query<CommentProps[], void>({
      query: () => `comments`,
      providesTags: ['Comments'],
    }),
    getCommentById: build.query<CommentProps, number>({
      query: (commentId) => `comments/${commentId}`,
      providesTags: (result, error, id) => {
        if (error) {
          console.error('Error occurred while loading comment:', error);
        }
        return result ? [{ type: 'Comments', id }] : [];
      },
    }),
    getCommentsByPostId: build.query<CommentProps[], number>({
      query: (postId) => `posts/${postId}/comments`,
      providesTags: (result, error, id) => {
        if (error) {
          console.error('Error occurred while loading comments:', error);
        }
        return result ? [{ type: 'Comments', id }] : [];
      },
    }),
  }),
});

export const {
  useGetAllCommentsQuery,
  useGetCommentByIdQuery,
  useGetCommentsByPostIdQuery,
} = commentsApi;
