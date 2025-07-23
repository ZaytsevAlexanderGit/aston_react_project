import { useNavigate, useParams } from 'react-router-dom';
import { PhotosList } from '../../widgets/PhotosList/PhotosList.tsx';

export const AlbumPhotoPage = () => {
  const { id: albumId } = useParams();
  const navigate = useNavigate();

  if (!albumId) navigate('/posts');

  return <PhotosList albumId={albumId} />;
};
