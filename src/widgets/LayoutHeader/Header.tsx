import styles from './Header.module.scss';
import { ThemeSwitcher } from '../../features/ThemeSwitcher/ui/ThemSwitcher.tsx';
import { Modal } from '../../shared/ui/Modal/Modal.tsx';
import { useState } from 'react';
import { Button } from '../../shared/ui/Button/Button.tsx';

export const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const handleToggleModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <header className={styles.headerWrapper}>
      <ThemeSwitcher />
      <h1 className={styles.header}>React интенсив: Домашнее Задание.</h1>
      <Button buttonType={'secondary'} onClick={handleToggleModal}>
        Информация о проекте
      </Button>
      {showModal && (
        <Modal
          modal={{
            title: 'О Проекте',
            body: (
              <ol className={styles.modalText}>
                <li>Приложение, с отрисовкой списка постов.</li>
                <li>Реализованно переключение светлои и темной тем.</li>
                <li>
                  Реализовано модальное окно, которое Вы сейчас наблюдаете.
                </li>
              </ol>
            ),
            footer: `Aston React Intensive©`,
          }}
          handleClose={handleToggleModal}
        >
          <>
            <Modal.Title />
            <Modal.Body />
            <Modal.Footer />
            <Modal.CloseButton />
          </>
        </Modal>
      )}
    </header>
  );
};
