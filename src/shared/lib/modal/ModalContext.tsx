import { createContext, type ReactNode, useContext } from 'react';

export type Modal = {
  title?: ReactNode | string;
  body?: ReactNode | string;
  footer?: ReactNode | string;
};

type ModalContext = {
  modal: Modal;
  handleClose?: () => void;
};

export const ModalContext = createContext<ModalContext | undefined>(undefined);

export function useModalContext() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModalContext must be used within ModalContextProvider');
  }
  return context;
}
