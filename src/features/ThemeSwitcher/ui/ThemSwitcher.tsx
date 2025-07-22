import styles from './ThemeSwitcher.module.scss';
import clsx from 'clsx';
import { useTheme } from '../../../shared/lib/theme/ThemeContext';

export function ThemeSwitcher() {
  const { setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className={styles.switcherWrapper}>
      <label className={styles.switch}>
        <input id="switcher" type="checkbox" onClick={toggleTheme} />
        <span className={clsx(styles.slider, styles.round)} />
      </label>
    </div>
  );
}
