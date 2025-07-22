import type { Dispatch, SetStateAction } from 'react';

import styles from './PostLengthFilter.module.scss';

interface PostLengthFilterProps {
  titleLength: number;
  setTitleLength: Dispatch<SetStateAction<number>>;
}

export const PostLengthFilter = ({
  titleLength,
  setTitleLength,
}: PostLengthFilterProps) => {
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
          max="50"
          value={titleLength}
          onChange={(e) => setTitleLength(Number(e.target.value))}
        />
      </div>
    </div>
  );
};
