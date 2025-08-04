import styles from './Todo.module.scss';
import clsx from 'clsx';
import type { TodoProps } from '../model/types.ts';
import React, { type FC } from 'react';

type TodoComponentProps = {
  todo: TodoProps;
};

export const Todo: FC<TodoComponentProps> = React.memo(function Todo({ todo }) {
  return (
    <>
      <label className={styles.todoCheck}>
        <input
          id="todoCheckBox"
          className={styles.todoItemCheckBox}
          type={'checkbox'}
          defaultChecked={todo.completed}
        />
        <span className={clsx(styles.checkBox)} />
      </label>
      <h3 className={styles.todoItemTitle}>{todo.title}</h3>
    </>
  );
});
