import styles from './Photo.module.scss';
import type { PhotoProps } from '../types/types.ts';
import React, { type FC, useState } from 'react';

type PhotoComponentProps = {
  photo: PhotoProps;
};

export const Photo: FC<PhotoComponentProps> = React.memo(function Photo({
  photo,
}) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <h3
        className={styles.photoImage}
        style={{
          display: isLoading ? 'flex' : 'none',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        Загрузка...
      </h3>
      <img
        style={{ display: isLoading ? 'none' : 'block' }}
        className={styles.photoImage}
        src={photo?.url.replace(
          /(https:\/\/via\.placeholder\.com\/600\/([^\/]+))/,
          'https://placehold.co/200/$2/FFF'
        )}
        onLoad={() => {
          setIsLoading(false);
        }}
        alt={photo.title}
      />
      <h3 className={styles.photoTitle}>{photo.title}</h3>
    </>
  );
});
