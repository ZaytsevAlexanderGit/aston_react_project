import './App.css';
import { MainLayout } from '../shared/MainLayout.tsx';
import { PostList } from '../widgets';
import { withLoading } from '../shared/lib/hoc/withLoading.tsx';

function App() {
  const PostListWithLoading = withLoading(PostList);

  return (
    <MainLayout>
      <PostListWithLoading />
    </MainLayout>
  );
}

export default App;
