import styles from './Comment.module.scss';
import type { PostCommentProps } from '../types/types.ts';
import { Link } from 'react-router-dom';
import React, { type FC } from 'react';
import { getCommentAuthorName } from '../../../shared/lib/utils.ts';

type CommentProps = {
  comment: PostCommentProps;
};

export const Comment: FC<CommentProps> = React.memo(function Comment({
  comment,
}) {
  const authorName = getCommentAuthorName({ id: comment.authorId });

  return (
    <>
      <div className={styles.commentsBlock__comment_other}>
        <Link
          className={styles.commentsBlock__comment__author}
          to={`/users/${comment.authorId}/posts`}
        >
          {authorName ? authorName : 'Unknown Author'}
        </Link>
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
