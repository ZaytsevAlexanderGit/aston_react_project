import { useLocation, useNavigate, useParams } from 'react-router-dom';
import styles from './albums-photo.module.scss';
import { Button } from '../../shared/ui/Button/Button.tsx';
import { Photo } from '../../entities/photo/ui/Photo.tsx';
import { useGetPhotosByAlbumIdQuery } from '../../entities/photo/api/photosApi.ts';
import { useGetAlbumByIdQuery } from '../../entities/album/api/albumsApi.ts';
import React, { useEffect, useRef } from 'react';

export const AlbumPhotoPage = () => {
  const navigate = useNavigate();
  const albumNameRef  = useRef('');
  const { id: albumId } = useParams();
  const [shouldFetch, setShouldFetch] = React.useState(false);
  const location = useLocation();

  useEffect(()=>{
    if (albumNameRef.current==='') {
      if (location.state)
      {
        albumNameRef.current = location.state.albumName
      }
      else  setShouldFetch(true);
    }
  },[shouldFetch])

  const { data: albumData } = useGetAlbumByIdQuery(albumId!,{
    skip:!shouldFetch
  });

  if (albumData) {
    albumNameRef.current = albumData.title
    setShouldFetch(false)
  };

  if (!albumId) navigate('/posts');

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
      ) : (
        <div className={styles.photoListWrapper}>
          <h3>{albumNameRef.current}</h3>
          <ul className={styles.photoList}>
            {albumPhotos.map((photo) => (
              <li className={styles.photoItem} key={photo.id}>
                <Photo photo={photo} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
