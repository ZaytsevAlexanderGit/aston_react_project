import styles from './user_albums.module.scss';
import { defaultAlbumsData } from '../../shared/lib/constants.ts';
import { useNavigate } from 'react-router-dom';
import type { AlbumsProps } from '../../shared/lib/types.ts';
import React from 'react';

export const UserPageAlbums = () => {
  const userAlbums = defaultAlbumsData;

  const navigate = useNavigate();

  const navigateToPhotosHandler = (
    event: React.MouseEvent<HTMLLIElement>,
    album: AlbumsProps
  ) => {
    event.preventDefault();
    event.stopPropagation();
    navigate(`/albums/${album.albumId}/photos`);
  };

  return (
    <div className={styles.albumsListWrapper}>
      <ul className={styles.albumsList}>
        {userAlbums.map((album) => (
          <li
            onClick={(event) => navigateToPhotosHandler(event, album)}
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
        ))}
      </ul>
    </div>
  );
};
