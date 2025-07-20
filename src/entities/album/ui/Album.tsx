import styles from './Album.module.scss';
import type { AlbumProps } from '../types/types';
import React, { type FC } from 'react';

type AlbumComponentProps = {
  album: AlbumProps;
};

export const Album: FC<AlbumComponentProps> = React.memo(function Album({
  album,
}) {
  return (
    <>
      <h3 className={styles.albumsItemTitle}>{album.title}</h3>
    </>
  );
});
