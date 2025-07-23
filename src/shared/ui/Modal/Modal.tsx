import styles from './Modal.module.scss';
import { createPortal } from 'react-dom';
import { type PropsWithChildren } from 'react';
import { type Modal, ModalContext } from '../../lib/modal/ModalContext.tsx';
import { Title, Body, Footer, CloseButton } from './components';
type ModalProps = PropsWithChildren & {
  modal: Modal;
  handleClose: () => void;
};

const modalElement = document.getElementById('modal') as HTMLElement;

export function Modal({ handleClose, children, modal }: ModalProps) {
  return createPortal(
    <ModalContext.Provider value={{ modal, handleClose }}>
      <div onClick={handleClose} className={styles.overlay}>
        <div onClick={(e) => e.stopPropagation()} className={styles.modal}>
          {children}
        </div>
      </div>
    </ModalContext.Provider>,
    modalElement
  );
}

Modal.Title = Title;
Modal.Body = Body;
Modal.Footer = Footer;
Modal.CloseButton = CloseButton;
