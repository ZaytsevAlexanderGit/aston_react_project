import styles from './user_albums.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { Album } from '../../entities/album/ui/Album.tsx';
import { useGetAlbumsByUserIdQuery } from '../../entities/album/api/albumsApi.ts';
import React from 'react';
import { ItemList } from '../../shared/ui/ItemList/ItemList.tsx';
import type { AlbumProps } from '../../entities/album/model/types.ts';

export const UserPageAlbums = () => {
  const { id: userId } = useParams();
  const navigate = useNavigate();

  if (!userId) navigate('/posts');

  const { data: userAlbums = [], isLoading } = useGetAlbumsByUserIdQuery(
    userId!
  );

  const navigateToPhotosHandler = (
    event: React.MouseEvent<HTMLLIElement>,
    album: AlbumProps
  ) => {
    event.preventDefault();
    event.stopPropagation();
    navigate(`/albums/${album.id}/photos`, {
      state: { albumName: album.title },
    });
  };

  return isLoading ? (
    <h3>Загрузка...</h3>
  ) : (
    <div className={styles.albumsListWrapper}>
      <ItemList
        items={userAlbums}
        keyExtractor={(album) => album.id}
        container={'ul'}
        extClassName={styles.albumsList}
        renderItem={(album) => (
          <li
            onClick={(event) => navigateToPhotosHandler(event, album)}
            className={styles.albumsItem}
          >
            <Album album={album} />
          </li>
        )}
      />
    </div>
  );
};
