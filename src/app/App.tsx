import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './providers/router/router.tsx';
import { ErrorBoundary } from '../features/error-boundary/ErrorBoundary.tsx';
import { ThemeContextProvider } from '../shared/lib/theme/ThemeContext.tsx';
import { Provider } from 'react-redux';
import { store } from './providers/store/store.ts';

function App() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <ThemeContextProvider>
          <RouterProvider router={router} />
        </ThemeContextProvider>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
