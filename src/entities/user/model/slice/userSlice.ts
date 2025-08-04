import {
  createEntityAdapter,
  createSlice,
  type EntityState,
} from '@reduxjs/toolkit';
import type { UserProps } from '../../types/types.ts';
import { usersApi } from '../../api/usersApi.ts';
import type { AppState } from '../../../../app/providers/store/store.ts';

export const usersAdapter = createEntityAdapter<UserProps>({
  sortComparer: (a, b) => a.id - b.id,
});

interface UsersState extends EntityState<UserProps, number> {
  usersLoading: string;
}

const initialState: UsersState = usersAdapter.getInitialState({
  usersLoading: 'loading',
});

const userSelectors = usersAdapter.getSelectors();

export const userSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {},
  selectors: {
    selectAllUsers: (state) => userSelectors.selectAll(state),
    selectUsersEntities: (state) => userSelectors.selectEntities(state),
    selectUserById: (state, id: number) => userSelectors.selectById(state, id),
  },
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

export const usersSelectors = userSlice.selectors;

export const getUserById = (id: number) => (state: AppState) =>
  usersSelectors.selectUserById(state, id);
