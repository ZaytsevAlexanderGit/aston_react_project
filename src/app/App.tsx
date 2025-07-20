import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './providers/router/router.tsx';
import { ErrorBoundary } from '../features/error-boundary/ErrorBoundary.tsx';
import { ThemeContextProvider } from '../shared/lib/theme/ThemeContext.tsx';
import { usePosts } from '../features/PostList/model/hooks/usePosts.ts';
import { useGetAllUsersQuery } from '../entities/user/api/usersApi.ts';

function App() {
  usePosts();
  useGetAllUsersQuery();

  return (
    <ErrorBoundary>
      <ThemeContextProvider>
        <RouterProvider router={router} />
      </ThemeContextProvider>
    </ErrorBoundary>
  );
}

export default App;
