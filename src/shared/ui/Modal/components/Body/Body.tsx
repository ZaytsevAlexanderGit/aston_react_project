import styles from './Body.module.scss';
import { useModalContext } from '../../../../lib/modal/ModalContext.tsx';

export function Body() {
  const { modal } = useModalContext();

  if (typeof modal.body === 'string')
    return <p className={styles.modalText}>{modal.body}</p>;
  else {
    return <div className={styles.modalBody}>{modal.body}</div>;
  }
}
