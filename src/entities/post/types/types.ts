import type { PostCommentProps } from '../../comment/types/types.ts';

export type PostProps = {
  number: number;
  id: string;
  title: string;
  postBody: string;
  comments: PostCommentProps[];
};

export type VisibleComments = Record<string, boolean>;
