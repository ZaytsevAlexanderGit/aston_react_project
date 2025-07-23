import styles from './Footer.module.scss';
import { useModalContext } from '../../../../lib/modal/ModalContext.tsx';

export function Footer() {
  const { modal } = useModalContext();

  return <p className={styles.modalFooter}>{modal.footer}</p>;
}
