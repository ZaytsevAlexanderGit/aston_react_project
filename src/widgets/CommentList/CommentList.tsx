import styles from './CommentList.module.scss';
import type { PostProps } from '../../entities/post/types/types.ts';
import { Comment } from '../../entities/comment/ui/Comment.tsx';

type CommentListProps = {
  post: PostProps;
};

export function CommentList({ post }: CommentListProps) {
  return (
    <ul className={styles.commentsBlock}>
      {post.comments.map((comment) => (
        <li className={styles.commentsBlock__comment} key={comment.id}>
          <Comment comment={comment} />
        </li>
      ))}
    </ul>
  );
}
