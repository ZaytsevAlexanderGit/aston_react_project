import styles from './Album.module.scss';
import type { AlbumsProps } from '../../../shared/lib/types.ts';
import { type FC } from 'react';
import { useNavigate } from 'react-router-dom';

type AlbumComponentProps = {
  album: AlbumsProps;
};

export const Album: FC<AlbumComponentProps> = ({ album }) => {
  const navigate = useNavigate();
  const navigateToPhotosHandler = () => {
    navigate(`/albums/${album.albumId}/photos`);
  };

  return (
    <li
      onClick={navigateToPhotosHandler}
      className={styles.albumsItem}
      key={album.albumId}
    >
      <img
        className={styles.albumCover}
        src={album.albumCover}
        alt={album.albumTitle}
      />
      <h3 className={styles.albumsItemTitle}>{album.albumTitle}</h3>
    </li>
  );
};
