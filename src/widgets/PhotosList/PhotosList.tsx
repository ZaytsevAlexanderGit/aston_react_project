import styles from './PhotosList.module.scss';
import React, { useEffect, useRef } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useGetAlbumByIdQuery } from '../../entities/album/api/albumsApi.ts';
import { useGetPhotosByAlbumIdQuery } from '../../entities/photo/api/photosApi.ts';
import { Button } from '../../shared/ui/Button/Button.tsx';
import { Photo } from '../../entities/photo/ui/Photo.tsx';
import { ItemList } from '../../shared/ui/ItemList/ItemList.tsx';

type PhotosListProps = {
  albumId: string | undefined;
};

export const PhotosList = ({ albumId }: PhotosListProps) => {
  const navigate = useNavigate();
  const albumNameRef = useRef('');
  const [shouldFetch, setShouldFetch] = React.useState(false);
  const location = useLocation();

  useEffect(() => {
    if (albumNameRef.current === '') {
      if (location.state) {
        albumNameRef.current = location.state.albumName;
      } else setShouldFetch(true);
    }
  }, [shouldFetch]);

  const { data: albumData } = useGetAlbumByIdQuery(albumId!, {
    skip: !shouldFetch,
  });

  if (albumData) {
    albumNameRef.current = albumData.title;
    setShouldFetch(false);
  }

  const { data: albumPhotos = [], isLoading } = useGetPhotosByAlbumIdQuery(
    albumId!
  );

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Button buttonType={'secondary'} onClick={handleBack} children={'←'} />
      {isLoading ? (
        <h3>Загрузка...</h3>
      ) : albumPhotos.length ? (
        <div className={styles.photoListWrapper}>
          <h3>{albumNameRef.current}</h3>
          <ItemList
            items={albumPhotos}
            keyExtractor={(photo) => photo.id}
            container={'ul'}
            extClassName={styles.photoList}
            renderItem={(photo) => (
              <li className={styles.photoItem}>
                <Photo photo={photo} />
              </li>
            )}
          />
        </div>
      ) : (
        <Navigate to={'/posts'} />
      )}
    </>
  );
};
