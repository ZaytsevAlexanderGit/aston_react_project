import styles from './Title.module.scss';
import { useModalContext } from '../../../../lib/modal/ModalContext.tsx';

export function Title() {
  const { modal } = useModalContext();

  return <h3 className={styles.modalHeader}>{modal.title}</h3>;
}
