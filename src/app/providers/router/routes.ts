export const Routes = {
  ROOT: '/',
  ALL_POSTS: '/posts',
  POST_INFO: '/posts/:id',
  USER_PAGE: '/users/:id/',
  USER_PAGE_POSTS: '/users/:id/posts',
  USER_PAGE_ALBUMS: '/users/:id/albums',
  USER_PAGE_TODOS: '/users/:id/todos',
  ALBUM_PAGE_PHOTOS: '/albums/:id/photos',
  NOT_FOUND: '*',
} as const;
