import styles from './user_albums.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { Album } from '../../entities/album/ui/Album.tsx';
import { useGetAlbumsByUserIdQuery } from '../../entities/album/api/albumsApi.ts';
import React from 'react';

export const UserPageAlbums = () => {
  const { id: userId } = useParams();
  const navigate = useNavigate();

  if (!userId) navigate('/posts');

  const { data: userAlbums = [], isLoading } = useGetAlbumsByUserIdQuery(
    userId!
  );

  return isLoading ? (
    <h3>Загрузка...</h3>
  ) : (
    <div className={styles.albumsListWrapper}>
      <ul className={styles.albumsList}>
        {userAlbums.map((album) => (
          <li
            onClick={(event: React.MouseEvent<HTMLLIElement>) => {
              event.preventDefault();
              event.stopPropagation();
              navigate(`/albums/${album.id}/photos`, {
                state: { albumName: album.title },
              });
            }}
            className={styles.albumsItem}
            key={album.id}
          >
            <Album album={album} />
          </li>
        ))}
      </ul>
    </div>
  );
};
