import {
  createEntityAdapter,
  createSlice,
  type EntityState,
} from '@reduxjs/toolkit';
import type { PostProps } from '../../types/types.ts';
import { postsApi } from '../../api/postsApi.ts';
import type { AppState } from '../../../../app/providers/store/store.ts';

export const postsAdapter = createEntityAdapter<PostProps>({
  sortComparer: (a, b) => a.id - b.id,
});

interface PostsState extends EntityState<PostProps, number> {
  postsLoading: string;
}

const initialState: PostsState = postsAdapter.getInitialState({
  postsLoading: 'loading',
});

const postSelectors = postsAdapter.getSelectors();

export const postSlice = createSlice({
  name: 'posts',
  initialState: initialState,
  reducers: {},
  selectors: {
    selectAllPosts: (state) => postSelectors.selectAll(state),
    selectPostsEntities: (state) => postSelectors.selectEntities(state),
    selectPostById: (state, id: number) => postSelectors.selectById(state, id),
  },
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

export const postsSelectors = postSlice.selectors;

export const getPostById = (id: number) => (state: AppState) =>
  postsSelectors.selectPostById(state, id);
