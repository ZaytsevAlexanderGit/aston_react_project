import React, { type FC, useEffect, useRef, useState } from 'react';
import styles from './PostCard.module.scss';
import type { PostProps } from '../types/types.ts';
import { Button } from '../../../shared/ui/Button/Button.tsx';
import clsx from 'clsx';
import { CommentList } from '../../../widgets/CommentList/CommentList.tsx';

type PostCardProps = {
  post: PostProps;
  showComments: boolean;
  toggleComments: (postId: string) => void;
};

export const PostCard: FC<PostCardProps> = React.memo(function PostCard({
  post,
  showComments,
  toggleComments,
}) {
  const [expanded, setExpanded] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const contentRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      const isTruncated =
        contentRef.current.scrollHeight > contentRef.current.clientHeight;

      setShowButton(isTruncated);
    }
  }, [post.postBody]);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <li className={styles.postCardListItem}>
      <article className={styles.postCard}>
        <h3 className={styles.postTitle}>{post.title}</h3>
        <div className={styles.postCardBodyWrapper}>
          <p
            ref={contentRef}
            className={clsx(
              styles.postCardBody,
              expanded ? styles.postCardBody__expanded : ''
            )}
          >
            {post.postBody}
          </p>
          {showButton && (
            <Button buttonType={'showPost'} onClick={toggleExpand}>
              {expanded ? 'Скрыть' : 'Показать больше'}
            </Button>
          )}
        </div>
        <div className={styles.commentsBlockWrapper}>
          <Button
            buttonType={'showComments'}
            children={
              showComments ? 'Скрыть комментарии' : 'Показать комментарии'
            }
            onClick={() => toggleComments(post.id)}
          />
          {showComments && <CommentList post={post} />}
        </div>
      </article>
    </li>
  );
});
