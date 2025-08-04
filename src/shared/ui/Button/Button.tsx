import styles from './Button.module.scss';
import React, { type PropsWithChildren } from 'react';
import clsx from 'clsx';

type ButtonType =
  | 'primary'
  | 'secondary'
  | 'submit'
  | 'closeModalCross'
  | 'showComments'
  | 'showPost';

type ButtonProps = PropsWithChildren & {
  buttonType: ButtonType;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export function Button({ buttonType, onClick, children }: ButtonProps) {
  return (
    <button
      className={clsx(styles.button, styles[`${buttonType}`])}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
