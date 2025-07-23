import styles from './user_albums.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { Album } from '../../entities/album/ui/Album.tsx';
import { useGetAlbumsByUserIdQuery } from '../../entities/album/api/albumsApi.ts';
import { ItemList } from '../../shared/ui/ItemList/ItemList.tsx';

export const UserPageAlbums = () => {
  const { id: userId } = useParams();
  const navigate = useNavigate();

  if (!userId) navigate('/posts');

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
