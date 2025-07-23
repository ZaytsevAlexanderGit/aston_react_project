import { useGetTodosByUserIdQuery } from '../../entities/todo/api/todosApi.ts.ts';
import styles from './TodosList.module.scss';
import { Todo } from '../../entities/todo/ui/Todo.tsx';
import { ItemList } from '../../shared/ui/ItemList/ItemList.tsx';

type TodosListProps = {
  userId: string | undefined;
};

export const TodosList = ({ userId }: TodosListProps) => {
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
