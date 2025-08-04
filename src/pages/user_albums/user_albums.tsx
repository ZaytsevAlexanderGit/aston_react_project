import { AlbumsList } from '../../widgets/AlbumsList/AlbumsList.tsx';
import { useSafeParams } from '../../shared/lib/hooks/useSafeParams.ts';

export const UserPageAlbums = () => {
  const { id: userId } = useSafeParams(['id']);

  return <AlbumsList userId={userId} />;
};
