import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import type { PostProps } from '../../types/types.ts';
import { postsApi } from '../../api/postsApi.ts';
import type { AppState } from '../../../../app/providers/store/store.ts';

export const postsAdapter = createEntityAdapter<PostProps>({
  sortComparer: (a, b) => a.id - b.id,
});

export const postSlice = createSlice({
  name: 'posts',
  initialState: postsAdapter.getInitialState({ postsLoading: 'loading' }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        postsApi.endpoints.getAllPosts.matchFulfilled,
        (state, action) => {
          postsAdapter.setAll(state, action.payload);
          if (state.postsLoading === 'loading') state.postsLoading = 'idle';
        }
      )
      .addMatcher(
        postsApi.endpoints.getPostsByUserId.matchFulfilled,
        (state, action) => {
          postsAdapter.upsertMany(state, action.payload);
          if (state.postsLoading === 'loading') state.postsLoading = 'idle';
        }
      );
  },
});

export const postsSelectors = postsAdapter.getSelectors(
  (state: AppState) => state.posts
);
