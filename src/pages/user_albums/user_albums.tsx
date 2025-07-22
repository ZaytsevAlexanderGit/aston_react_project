import styles from './user_albums.module.scss';
import { defaultAlbumsData } from '../../shared/lib/constants.ts';
import { Album } from '../../entities/album/ui/Album.tsx';

export const UserPageAlbums = () => {
  const userAlbums = defaultAlbumsData;

  return (
    <div className={styles.albumsListWrapper}>
      <ul className={styles.albumsList}>
        {userAlbums.map((album) => (
          <Album album={album} />
        ))}
      </ul>
    </div>
  );
};
