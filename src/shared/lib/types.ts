export type TodosProps = {
  id: string;
  authorId: string;
  todoTitle: string;
  todoBody: string;
  isComplete: boolean;
};

type AlbumPhotoProps = {
  id: string;
  name: string;
  url: string;
};

export type AlbumsProps = {
  albumId: string;
  albumTitle: string;
  albumCover: string;
  albumItems: AlbumPhotoProps[];
};
