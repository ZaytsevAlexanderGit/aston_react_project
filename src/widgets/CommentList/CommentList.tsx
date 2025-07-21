import styles from './CommentList.module.scss';
import type { PostProps } from '../../entities/post/model/types.ts';
import { Comment } from '../../entities/comment/ui/Comment.tsx';
import { useGetCommentsByPostIdQuery } from '../../entities/comment/api/commentsApi.ts';
import { ItemList } from '../../shared/ui/ItemList/ItemList.tsx';

type CommentListProps = {
  post: PostProps;
};

export function CommentList({ post }: CommentListProps) {
  const { data: comments = [], isLoading } = useGetCommentsByPostIdQuery(
    post.id
  );

  if (isLoading) return <div>Загрузка...</div>;

  return (
    <ItemList
      items={comments}
      keyExtractor={(comment) => comment.id}
      container={'ul'}
      extClassName={styles.commentsBlock}
      renderItem={(comment) => (
        <li className={styles.commentsBlock__comment}>
          <Comment comment={comment} />
        </li>
      )}
    />
  );
}
