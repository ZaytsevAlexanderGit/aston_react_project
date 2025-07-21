import styles from './user_todos.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { Todo } from '../../entities/todo/ui/Todo.tsx';
import { useGetTodosByUserIdQuery } from '../../entities/todo/api/todosApi.ts.ts';
import { ItemList } from '../../shared/ui/ItemList/ItemList.tsx';

export const UserPageTodos = () => {
  const { id: userId } = useParams();
  const navigate = useNavigate();

  if (!userId) navigate('/posts');

  const { data: userTodos = [], isLoading } = useGetTodosByUserIdQuery(userId!);

  return isLoading ? (
    <h3>Загрузка...</h3>
  ) : (
    <div className={styles.todosListWrapper}>
      <ItemList
        items={userTodos}
        keyExtractor={(todo) => todo.id}
        container={'ul'}
        extClassName={styles.todosList}
        renderItem={(todo) => (
          <li className={styles.todoItem}>
            <Todo todo={todo} />
          </li>
        )}
      />
    </div>
  );
};
