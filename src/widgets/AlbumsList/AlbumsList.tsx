import styles from './AlbumsList.module.scss';

import { useGetAlbumsByUserIdQuery } from '../../entities/album/api/albumsApi.ts';
import { Album } from '../../entities/album/ui/Album.tsx';

type AlbumsListProps = {
  userId: string | undefined;
};

export const AlbumsList = ({ userId }: AlbumsListProps) => {
  const { data: userAlbums = [], isLoading } = useGetAlbumsByUserIdQuery(
    userId!
  );

  return isLoading ? (
    <h3>Загрузка...</h3>
  ) : (
    <div className={styles.albumsListWrapper}>
      <ul className={styles.albumsList}>
        {userAlbums.map((album) => (
          <Album album={album} key={album.id} />
        ))}
      </ul>
    </div>
  );
};
