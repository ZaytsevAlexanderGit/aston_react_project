import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../../../config/api-config.ts';
import type { AlbumProps } from '../types/types.ts';

export const albumsApi = createApi({
  reducerPath: 'albumsApi',
  tagTypes: ['Albums', 'Album'],
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (build) => ({
    getAllAlbums: build.query<AlbumProps[], void>({
      query: () => 'albums/',
      providesTags: ['Albums'],
    }),
    getAlbumById: build.query<AlbumProps, string>({
      query: (albumId) => `albums/${albumId}`,
      providesTags: (result, error, id) => {
        if (error) {
          console.error('Error occurred while loading album:', error);
        }
        return result ? [{ type: 'Album', id: id }] : [];
      },
    }),
    getAlbumsByUserId: build.query<AlbumProps[], string>({
      query: (userId) => `users/${userId}/albums`,
      providesTags: (result, error, id) => {
        if (error) {
          console.error('Error occurred while loading albums:', error);
        }
        return result ? [{ type: 'Albums', id: id }] : [];
      },
    }),
  }),
});

export const {
  useGetAllAlbumsQuery,
  useGetAlbumByIdQuery,
  useGetAlbumsByUserIdQuery,
} = albumsApi;
