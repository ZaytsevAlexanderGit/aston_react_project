import styles from './user_todos.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { Todo } from '../../entities/todo/ui/Todo.tsx';
import { useGetTodosByUserIdQuery } from '../../entities/todo/api/todosApi.ts.ts';

export const UserPageTodos = () => {
  const { id: userId } = useParams();
  const navigate = useNavigate();

  if (!userId) navigate('/posts');

  const { data: userTodos = [], isLoading } = useGetTodosByUserIdQuery(userId!);

  return isLoading ? (
    <h3>Загрузка...</h3>
  ) : (
    <div className={styles.todosListWrapper}>
      <ul className={styles.todosList}>
        {userTodos.map((todo) => (
          <li className={styles.todoItem} key={todo.id}>
            <Todo todo={todo} />
          </li>
        ))}
      </ul>
    </div>
  );
};
