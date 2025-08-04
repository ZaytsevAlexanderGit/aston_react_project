import React, { type Dispatch, type SetStateAction } from 'react';

import styles from './PostLengthFilter.module.scss';

interface PostLengthFilterProps {
  titleLength: number;
  setTitleLength: Dispatch<SetStateAction<number>>;
}

export const PostLengthFilter = ({
  titleLength,
  setTitleLength,
}: PostLengthFilterProps) => {
  const setLengthFilterHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTitleLength(Number(e.target.value));

  return (
    <div className={styles.postFilter}>
      <div className={styles.filterControls}>
        <label className={styles.filterControls__label} htmlFor="titleLength">
          Минимальная длина заголовка: {titleLength} символов
        </label>
        <input
          className={styles.filterControls__input}
          id="titleLength"
          type="range"
          min="0"
          max="500"
          value={titleLength}
          onChange={setLengthFilterHandler}
        />
      </div>
    </div>
  );
};
