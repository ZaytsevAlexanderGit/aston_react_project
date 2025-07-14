import { PostList } from '../../widgets/PostList/PostList.tsx';
import { useParams } from 'react-router-dom';

export const UserPagePosts = () => {
  const { id: userId } = useParams();

  return <PostList userId={userId} />;
};
