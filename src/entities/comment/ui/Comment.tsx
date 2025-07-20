import styles from './Comment.module.scss';
import type { PostCommentProps } from '../types/types.ts';
import React, { type FC } from 'react';

type CommentProps = {
  comment: PostCommentProps;
};

export const Comment: FC<CommentProps> = React.memo(function Comment({
  comment,
}) {
  return (
    <>
      <div className={styles.commentsBlock__comment_other}>
        <p>{comment.author}</p>
        <p>
          {comment.date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
      </div>
      <p className={styles.commentsBlock__comment_text}>
        {comment.commentText}
      </p>
    </>
  );
});
