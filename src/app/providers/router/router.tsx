import { createBrowserRouter, Navigate } from 'react-router-dom';
import { MainLayout } from '../../../shared/MainLayout.tsx';
import { Routes } from './routes';
import { PostsPage } from '../../../pages/posts/posts.tsx';
import { PostInfoPage } from '../../../pages/post_info/post_info.tsx';
import { UserTabs } from '../../../widgets/UserTab/UserTabs.tsx';
import { UserPagePosts } from '../../../pages/user_posts/user_posts.tsx';
import { UserPageTodos } from '../../../pages/user_todos/user_todos.tsx';
import { UserPageAlbums } from '../../../pages/user_albums/user_albums.tsx';

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
            element: <UserTabs />,
            children: [
              {
                index: true,
                element: <Navigate to={Routes.USER_PAGE_POSTS} replace />,
              },
              { path: Routes.USER_PAGE_POSTS, element: <UserPagePosts /> },
              { path: Routes.USER_PAGE_ALBUMS, element: <UserPageAlbums /> },
              { path: Routes.USER_PAGE_TODOS, element: <UserPageTodos /> },
            ],
          },
        ],
      },
    ],
  },
]);
