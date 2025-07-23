import type { PostCommentProps } from '../../comment/types/types.ts';

export type PostProps = {
  number: number;
  id: string;
  authorId: string;
  title: string;
  postBody: string;
  comments: PostCommentProps[];
};

export type VisibleComments = Record<string, boolean>;

export type Author = {
  id: string;
  name: string;
};
