import styles from './Comment.module.scss';
import type { CommentProps } from '../types/types.ts';
import React, { type FC } from 'react';

type PostCommentProps = {
  comment: CommentProps;
};

export const Comment: FC<PostCommentProps> = React.memo(function Comment({
  comment,
}) {
  return (
    <>
      <p className={styles.commentsBlock__comment__author}>{comment.email}</p>
      <p className={styles.commentsBlock__comment_text}>{comment.body}</p>
    </>
  );
});
