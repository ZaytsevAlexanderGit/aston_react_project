import { createBrowserRouter, Navigate } from 'react-router-dom';
import { MainLayout } from '../../../shared/MainLayout.tsx';
import { Routes } from './routes';
import { PostsPage } from '../../../pages/posts/posts.tsx';
import { PostInfoPage } from '../../../pages/post_info/post_info.tsx';
import { UserTabs } from '../../../widgets/UserTab/UserTabs.tsx';

export const router = createBrowserRouter([
  {
    path: Routes.ROOT,
    element: <MainLayout />,
    children: [
      {
        children: [
          { index: true, element: <Navigate to={Routes.ALL_POSTS} /> },
          { path: Routes.ALL_POSTS, element: <PostsPage /> },
          { path: Routes.POST_INFO, element: <PostInfoPage /> },
          { path: Routes.USER_PAGE, element: <UserTabs /> },
        ],
      },
    ],
  },
]);
