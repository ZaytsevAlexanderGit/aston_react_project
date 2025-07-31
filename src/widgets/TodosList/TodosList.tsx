import { useGetTodosByUserIdQuery } from '../../entities/todo/api/todosApi.ts.ts';
import styles from './TodosList.module.scss';
import { Todo } from '../../entities/todo/ui/Todo.tsx';

type TodosListProps = {
  userId: string;
};

export const TodosList = ({ userId }: TodosListProps) => {
  const { data: userTodos = [], isLoading } = useGetTodosByUserIdQuery(userId);

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
