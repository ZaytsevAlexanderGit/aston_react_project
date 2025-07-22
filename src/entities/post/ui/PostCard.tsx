import React, {
  type FC,
  type SyntheticEvent,
  useEffect,
  useRef,
  useState,
} from 'react';
import styles from './PostCard.module.scss';
import type { PostProps } from '../types/types.ts';
import { Button } from '../../../shared/ui/Button/Button.tsx';
import clsx from 'clsx';
import { CommentList } from '../../../widgets/CommentList/CommentList.tsx';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { usersSelectors } from '../../user/model/slice/userSlice.ts';
import type { AppState } from '../../../app/providers/store/store.ts';
import { useGetUserByIdQuery } from '../../user/api/usersApi.ts';

type PostCardProps = {
  post: PostProps;
  showComments: boolean;
  toggleComments?: (postId: number) => void;
};

export const PostCard: FC<PostCardProps> = React.memo(function PostCard({
  post,
  showComments,
  toggleComments,
}) {
  const { id } = useParams();
  const navigate = useNavigate();

  const handlePostClick = (e: SyntheticEvent) => {
    if (!id) {
      e.preventDefault();
      e.stopPropagation();
      navigate(`/posts/${post.id}`);
    }
  };

  const [expanded, setExpanded] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const contentRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      if (id !== undefined) {
        setShowButton(false);
        setExpanded(true);
      } else {
        const isTruncated =
          contentRef.current.scrollHeight > contentRef.current.clientHeight;
        setShowButton(isTruncated);
      }
    }
  }, [post.body]);

  const toggleExpandHandler = (e: SyntheticEvent<Element, Event>) => {
    e.stopPropagation();
    setExpanded(!expanded);
  };

  const toggleCommentsHandler = (e: SyntheticEvent<Element, Event>) => {
    e.stopPropagation();
    if (toggleComments) toggleComments(post.id);
  };

  let postAuthor = useSelector((state: AppState) => {
    const author = usersSelectors.selectById(state, post.userId);
    return author ? author.name : undefined;
  });

  const { data: userData, isLoading } = useGetUserByIdQuery(post.userId!, {
    skip: !!postAuthor,
  });

  if (!postAuthor && userData) postAuthor = userData.name;

  return (
    <article className={styles.postCard}>
      {isLoading ? (
        <h4>Загрузка...</h4>
      ) : (
        <Link
          to={`/users/${post.userId}/posts`}
          className={styles.postCard__author}
        >
          {postAuthor}
        </Link>
      )}
      <div className={styles.postCardWrapper}>
        <div
          onClick={handlePostClick}
          className={clsx(
            styles.postCardBodyWrapper,
            id ? styles.postCardBodyWrapperDisableHover : ''
          )}
        >
          <h3 className={styles.postTitle}>{post.title}</h3>
          <p
            ref={contentRef}
            className={clsx(
              styles.postCardBody,
              expanded ? styles.postCardBody__expanded : ''
            )}
          >
            {post.body}
          </p>
        </div>
        {showButton && (
          <Button buttonType={'showPost'} onClick={toggleExpandHandler}>
            {expanded ? 'Скрыть' : 'Показать больше'}
          </Button>
        )}

        {toggleComments ? (
          <div className={styles.commentsBlockWrapper}>
            <Button
              buttonType={'showComments'}
              children={
                showComments ? 'Скрыть комментарии' : 'Показать комментарии'
              }
              onClick={toggleCommentsHandler}
            />
            {showComments && <CommentList post={post} />}
          </div>
        ) : (
          <CommentList post={post} />
        )}
      </div>
    </article>
  );
});
