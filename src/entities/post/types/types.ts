export type PostProps = {
  userId: string;
  id: string;
  title: string;
  body: string;
};

export type VisibleComments = Record<string, boolean>;

export type Author = {
  id: string;
  name: string;
};

export type CommentProps = {
  postId: string;
  id: string;
  name: string;
  email: string;
  body: string;
};
