import styles from './CommentList.module.scss';
import type { PostProps } from '../../entities/post/types/types.ts';
import { Comment } from '../../entities/comment/ui/Comment.tsx';
import { useGetCommentsByPostIdQuery } from '../../entities/comment/api/commentsApi.ts';

type CommentListProps = {
  post: PostProps;
};

export function CommentList({ post }: CommentListProps) {
  const { data: comments = [], isLoading } = useGetCommentsByPostIdQuery(
    post.id
  );

  if (isLoading) return <div>Загрузка...</div>;

  return (
    <ul className={styles.commentsBlock}>
      {comments.map((comment) => (
        <li className={styles.commentsBlock__comment} key={comment.id}>
          <Comment comment={comment} />
        </li>
      ))}
    </ul>
  );
}
