import styles from './PostList.module.scss';
import { PostCard } from '../../entities/post/ui/PostCard.tsx';
import { useCallback, useMemo, useState } from 'react';
import type { VisibleComments } from '../../entities/post/model/types.ts';
import { filterByLength } from '../../features/PostLengthFilter/lib/ filterByLength.ts';
import { PostLengthFilter } from '../../features/PostLengthFilter/ui/PostLengthFilter .tsx';
import { useDebounce } from '../../shared/lib/hooks/useDebounce.ts';
import { useSelector } from 'react-redux';
import { postsSelectors } from '../../entities/post/model/slice/postSlice.ts';
import { ItemList } from '../../shared/ui/ItemList/ItemList.tsx';

type PostListProps = {
  userId?: number | undefined;
};

const PostList = ({ userId }: PostListProps) => {
  let posts = useSelector(postsSelectors.selectAll);

  if (userId) {
    posts = posts.filter((post) => post.userId === +userId);
  }

  const [titleLength, setTitleLength] = useState<number>(0);

  const debouncedTitleLength = useDebounce(titleLength, 500);

  const filteredPosts = useMemo(
    () => filterByLength({ posts: posts, titleLength: debouncedTitleLength }),
    [posts, debouncedTitleLength]
  );

  const [visibleComments, setVisibleComments] = useState<VisibleComments>({});

  const toggleComments = useCallback((postId: number) => {
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
      {filteredPosts.length > 0 ? (
        <ItemList
          items={filteredPosts}
          keyExtractor={(post) => post.id}
          container={'ul'}
          extClassName={styles.postList}
          renderItem={(post) => (
            <li className={styles.postCardListItem}>
              <PostCard
                key={post.id}
                post={post}
                showComments={visibleComments[post.id]}
                toggleComments={toggleComments}
              />
            </li>
          )}
        />
      ) : (
        <h4>Нет постов удовлетворяющих фильтру</h4>
      )}
    </div>
  );
};

export default PostList;
