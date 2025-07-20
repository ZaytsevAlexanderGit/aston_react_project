import { useLocation, useNavigate, useParams } from 'react-router-dom';
import styles from './albums-photo.module.scss';
import { Button } from '../../shared/ui/Button/Button.tsx';
import { Photo } from '../../entities/photo/ui/Photo.tsx';
import { useGetPhotosByAlbumIdQuery } from '../../entities/photo/api/photosApi.ts';
import { useGetAlbumByIdQuery } from '../../entities/album/api/albumsApi.ts';

export const AlbumPhotoPage = () => {
  const navigate = useNavigate();
  const { id: albumId } = useParams();
  const location = useLocation();

  let albumName = '';
  if (location.state) albumName = location.state.albumName;
  else {
    const { data: albumData } = useGetAlbumByIdQuery(albumId!);
    if (albumData) albumName = albumData.title;
  }

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
          <h3>{albumName}</h3>
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
