import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../../../config/api-config.ts';
import type { PhotoProps } from '../types/types.ts';

export const photosApi = createApi({
  reducerPath: 'photosApi',
  tagTypes: ['Photos'],
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (build) => ({
    getPhotosByAlbumId: build.query<PhotoProps, string>({
      query: (albumId) => `albums/${albumId}/photos`,
      providesTags: (result, error, id) => {
        if (error) {
          console.error('Error occurred while loading photos:', error);
        }
        return result ? [{ type: 'Photos', id: id }] : [];
      },
    }),
  }),
});

export const { useGetPhotosByAlbumIdQuery } = photosApi;
