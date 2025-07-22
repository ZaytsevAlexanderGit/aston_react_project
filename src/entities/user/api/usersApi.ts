import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../../../config/api-config.ts';
import type { UserProps } from '../model/types.ts';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  tagTypes: ['Users', 'User'],
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (build) => ({
    getAllUsers: build.query<UserProps[], void>({
      query: () => 'users/',
      providesTags: ['Users'],
    }),
    getUserById: build.query<UserProps, number>({
      query: (userId) => `users/${userId}`,
      providesTags: (result, error, id) => {
        if (error) {
          console.error('Error occurred while loading user:', error);
        }
        return result ? [{ type: 'User', id: id }] : [];
      },
    }),
  }),
});

export const { useGetAllUsersQuery, useGetUserByIdQuery } = usersApi;
