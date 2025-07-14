import { Routes } from './routes';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { MainLayout } from '../../../shared/layouts/MainLayout/MainLayout.tsx';
import { UserLayout } from '../../../shared/layouts/UserLayout/UserLayout.tsx';
import {
  PostsPage,
  PostInfoPage,
  UserPagePosts,
  UserPageTodos,
  UserPageAlbums,
  NotFoundPage,
} from '../../../pages';
import { AlbumPhotoPage } from '../../../pages/albums-photo/albums-photo.tsx';

export const router = createBrowserRouter([
  {
    path: Routes.ROOT,
    element: <MainLayout />,
    children: [
      {
        children: [
          { index: true, element: <Navigate to={Routes.ALL_POSTS} replace /> },
          { path: Routes.ALL_POSTS, element: <PostsPage /> },
          { path: Routes.POST_INFO, element: <PostInfoPage /> },
          {
            path: Routes.USER_PAGE,
            element: <UserLayout />,
            children: [
              { path: Routes.USER_PAGE_POSTS, element: <UserPagePosts /> },
              { path: Routes.USER_PAGE_ALBUMS, element: <UserPageAlbums /> },
              { path: Routes.USER_PAGE_TODOS, element: <UserPageTodos /> },
            ],
          },
          { path: Routes.ALBUM_PAGE_PHOTOS, element: <AlbumPhotoPage /> },
          { path: Routes.NOT_FOUND, element: <NotFoundPage /> },
        ],
      },
    ],
  },
]);
