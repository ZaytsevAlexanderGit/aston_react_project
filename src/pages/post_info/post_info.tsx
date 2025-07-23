import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { Routes } from '../../app/providers/router/routes.ts';
import { PostCard } from '../../entities/post/ui/PostCard.tsx';
import { defaultPostsData } from '../../shared/lib/constants.ts';
import { Button } from '../../shared/ui/Button/Button.tsx';

export const PostInfoPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const post = defaultPostsData.find((post) => post.id === id);

  const handleBack = () => {
    navigate(-1);
  };

  return post !== undefined ? (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <Button buttonType={'secondary'} onClick={handleBack} children={'←'} />
      <PostCard post={post} showComments={true} />
    </div>
  ) : (
    <Navigate to={Routes.ALL_POSTS} />
  );
};
