import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import type { UserProps } from '../types.ts';
import { usersApi } from '../../api/usersApi.ts';
import type { AppState } from '../../../../app/providers/store/store.ts';

export const usersAdapter = createEntityAdapter<UserProps>({
  sortComparer: (a, b) => a.id - b.id,
});

export const userSlice = createSlice({
  name: 'users',
  initialState: usersAdapter.getInitialState({ usersLoading: 'loading' }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        usersApi.endpoints.getAllUsers.matchFulfilled,
        (state, action) => {
          usersAdapter.setAll(state, action.payload);
          if (state.usersLoading === 'loading') state.usersLoading = 'idle';
        }
      )
      .addMatcher(
        usersApi.endpoints.getUserById.matchFulfilled,
        (state, action) => {
          usersAdapter.upsertOne(state, action.payload);
          if (state.usersLoading === 'loading') state.usersLoading = 'idle';
        }
      );
  },
});

export const usersSelectors = usersAdapter.getSelectors(
  (state: AppState) => state.users
);
