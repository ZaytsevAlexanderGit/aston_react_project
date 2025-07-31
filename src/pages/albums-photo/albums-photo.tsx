import { PhotosList } from '../../widgets/PhotosList/PhotosList.tsx';
import { useSafeParams } from '../../shared/lib/hooks/useSafeParams.ts';

export const AlbumPhotoPage = () => {
  const { id: albumId } = useSafeParams(['id']);

  return <PhotosList albumId={albumId} />;
};
