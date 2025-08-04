import styles from './Photo.module.scss';
import type { PhotoProps } from '../types/types.ts';
import React, { type FC, useState } from 'react';
import { Modal } from '../../../shared/ui/Modal/Modal.tsx';

type PhotoComponentProps = {
  photo: PhotoProps;
};

export const Photo: FC<PhotoComponentProps> = React.memo(function Photo({
  photo,
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const handlePhotoClick = () => {
    document.documentElement.style.overflow =
      document.documentElement.style.overflow === 'hidden' ? 'auto' : 'hidden';
    setIsSelected((prevState) => !prevState);
  };

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
        style={{ display: isLoading ? 'none' : 'block', cursor: 'pointer' }}
        className={styles.photoImage}
        src={photo?.url.replace(
          /(https:\/\/via\.placeholder\.com\/600\/([^\/]+))/,
          'https://placehold.co/200/$2/FFF'
        )}
        onLoad={() => {
          setIsLoading(false);
        }}
        alt={photo.title}
        onClick={handlePhotoClick}
      />
      <h3 className={styles.photoTitle}>{photo.title}</h3>

      {isSelected && (
        <Modal
          modal={{
            body: (
              <img
                style={{
                  transform: 'translate(50%)',
                  width: '50%',
                  height: '50%',
                  borderRadius: '8px',
                }}
                src={photo?.url.replace(
                  /(https:\/\/via\.placeholder\.com\/600\/([^/]+))/,
                  'https://placehold.co/200/$2/FFF'
                )}
                alt={photo.title}
              />
            ),
            footer: photo.title,
          }}
          handleClose={handlePhotoClick}
        >
          <>
            <Modal.Body />
            <Modal.Footer />
            <Modal.CloseButton />
          </>
        </Modal>
      )}
    </>
  );
});
