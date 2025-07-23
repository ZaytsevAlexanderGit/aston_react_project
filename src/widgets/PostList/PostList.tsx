import styles from './PostList.module.scss';
import { PostCard } from '../../entities/post/ui/PostCard.tsx';
import { useCallback, useEffect, useMemo, useState } from 'react';
import type { VisibleComments } from '../../entities/post/types/types.ts';
import { filterByLength } from '../../features/PostLengthFilter/lib/ filterByLength.ts';
import { PostLengthFilter } from '../../features/PostLengthFilter/ui/PostLengthFilter .tsx';
import { useDebounce } from '../../shared/lib/hooks/useDebounce.ts';
import { usePosts } from '../../features/PostList/model/hooks/usePosts.ts';

type PostListProps = {
  userId?: string;
};

const PostList = ({ userId }: PostListProps) => {
  useEffect(() => {
    // Для будущего получения данных по api
  }, []);

  const posts = usePosts({ userId });

  const [titleLength, setTitleLength] = useState<number>(0);

  const debouncedTitleLength = useDebounce(titleLength, 500);

  const filteredPosts = useMemo(
    () => filterByLength({ posts: posts, titleLength: debouncedTitleLength }),
    [posts, debouncedTitleLength]
  );

  const [visibleComments, setVisibleComments] = useState<VisibleComments>({});

  const toggleComments = useCallback((postId: string) => {
    setVisibleComments((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  }, []);

  return (
    <div className={styles.postListWrapper}>
      <div className={styles.postListMain}>
        <h2 className={styles.postListHeader}>Посты:</h2>
        <PostLengthFilter
          titleLength={titleLength}
          setTitleLength={setTitleLength}
        />
      </div>
      <ul className={styles.postList}>
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <li key={post.id} className={styles.postCardListItem}>
              <PostCard
                key={post.id}
                post={post}
                showComments={visibleComments[post.id]}
                toggleComments={toggleComments}
              />
            </li>
          ))
        ) : (
          <h4>У данного пользователя нет постов</h4>
        )}
      </ul>
    </div>
  );
};

export default PostList;
