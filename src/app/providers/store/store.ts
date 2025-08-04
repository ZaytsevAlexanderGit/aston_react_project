import { configureStore } from '@reduxjs/toolkit';
import { postsApi } from '../../../entities/post/api/postsApi.ts';
import { usersApi } from '../../../entities/user/api/usersApi.ts';
import { albumsApi } from '../../../entities/album/api/albumsApi.ts';
import { todosApi } from '../../../entities/todo/api/todosApi.ts.ts';
import { commentsApi } from '../../../entities/comment/api/commentsApi.ts';
import { photosApi } from '../../../entities/photo/api/photosApi.ts';
import { postSlice } from '../../../entities/post/model/slice/postSlice.ts';
import { userSlice } from '../../../entities/user/model/slice/userSlice.ts';

export const store = configureStore({
  reducer: {
    posts: postSlice.reducer,
    users: userSlice.reducer,
    [postsApi.reducerPath]: postsApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [commentsApi.reducerPath]: commentsApi.reducer,
    [albumsApi.reducerPath]: albumsApi.reducer,
    [todosApi.reducerPath]: todosApi.reducer,
    [photosApi.reducerPath]: photosApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(postsApi.middleware)
      .concat(usersApi.middleware)
      .concat(commentsApi.middleware)
      .concat(albumsApi.middleware)
      .concat(todosApi.middleware)
      .concat(photosApi.middleware),
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
