import styles from './user_todos.module.scss';
import { useParams } from 'react-router-dom';
import { defaultTodosData } from '../../shared/lib/constants.ts';
import clsx from 'clsx';

export const UserPageTodos = () => {
  const { id: userId } = useParams();

  const userTodos = defaultTodosData.filter((todo) => todo.authorId === userId);

  return (
    <div className={styles.todosListWrapper}>
      <ul className={styles.todosList}>
        {userTodos.map((todo) => (
          <li className={styles.todoItem} key={todo.id}>
            <label className={styles.todoCheck}>
              <input
                id="todoCheckBox"
                className={styles.todoItemCheckBox}
                type={'checkbox'}
                defaultChecked={todo.isComplete}
              />
              <span className={clsx(styles.checkBox)} />
            </label>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <h3 className={styles.todoItemTitle}>{todo.todoTitle}</h3>
              <p className={styles.todoItemBody}>{todo.todoBody}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
