import { useNavigate, useParams } from 'react-router-dom';
import styles from './albums-photo.module.scss';
import { defaultAlbumsData } from '../../shared/lib/constants.ts';
import { Button } from '../../shared/ui/Button/Button.tsx';

export const AlbumPhotoPage = () => {
  const navigate = useNavigate();
  const { id: albumId } = useParams();

  const albumPhotos = defaultAlbumsData.filter(
    (album) => album.albumId === albumId
  )[0].albumItems;

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Button buttonType={'secondary'} onClick={handleBack} children={'←'} />
      <div className={styles.photoListWrapper}>
        <ul className={styles.photoList}>
          {albumPhotos.map((photo) => (
            <li className={styles.photoItem} key={photo.id}>
              <img
                className={styles.photoImage}
                src={photo.url}
                alt={photo.name}
              />
              <h3 className={styles.photoTitle}>{photo.name}</h3>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
