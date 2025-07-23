import styles from './AlbumsList.module.scss';

import { useGetAlbumsByUserIdQuery } from '../../entities/album/api/albumsApi.ts';
import { Album } from '../../entities/album/ui/Album.tsx';
import { ItemList } from '../../shared/ui/ItemList/ItemList.tsx';

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
      <ItemList
        items={userAlbums}
        keyExtractor={(album) => album.id}
        container={'ul'}
        extClassName={styles.albumsList}
        renderItem={(album) => <Album album={album} />}
      />
    </div>
  );
};
