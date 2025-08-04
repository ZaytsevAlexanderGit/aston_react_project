import styles from './Album.module.scss';
import type { AlbumProps } from '../model/types';
import { type FC } from 'react';
import { useNavigate } from 'react-router-dom';

type AlbumComponentProps = {
  album: AlbumProps;
};

export const Album: FC<AlbumComponentProps> = ({ album }) => {
  const navigate = useNavigate();
  const navigateToPhotosHandler = () => {
    navigate(`/albums/${album.id}/photos`);
  };

  return (
    <li onClick={navigateToPhotosHandler} className={styles.albumsItem}>
      <h3 className={styles.albumsItemTitle}>{album.title}</h3>
    </li>
  );
};
