import { useNavigate, useParams } from 'react-router-dom';
import { AlbumsList } from '../../widgets/AlbumsList/AlbumsList.tsx';

export const UserPageAlbums = () => {
  const { id: userId } = useParams();
  const navigate = useNavigate();

  if (!userId) navigate('/posts');

  return <AlbumsList userId={userId} />;
};
