import styles from './PostList.module.scss';
import { PostCard } from '../../entities/post/ui/PostCard.tsx';
import { defaultPostsData } from '../../entities/post/constants.ts';
import { useCallback, useEffect, useMemo, useState } from 'react';
import type { VisibleComments } from '../../entities/post/types/types.ts';
import { filterByLength } from '../../features/PostLengthFilter/lib/ filterByLength.ts';
import { PostLengthFilter } from '../../features/PostLengthFilter/ui/PostLengthFilter .tsx';
import { useDebounce } from '../../shared/lib/hooks/useDebounce.ts';
import { withLoading } from '../../shared/lib/hoc/withLoading.tsx';

// eslint-disable-next-line react-refresh/only-export-components
const PostList = () => {
  useEffect(() => {
    // Для будущего получения данных по api
  }, []);

  const posts = defaultPostsData;
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
        {filteredPosts.map((post) => (
          <li key={post.id} className={styles.postCardListItem}>
            <PostCard
              key={post.id}
              post={post}
              showComments={visibleComments[post.id]}
              toggleComments={toggleComments}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
const withLoadingPostList = withLoading(PostList);

export default withLoadingPostList;
