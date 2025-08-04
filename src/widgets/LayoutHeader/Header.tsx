import styles from './Header.module.scss';
import { Modal } from '../../shared/ui/Modal/Modal.tsx';
import { useState } from 'react';
import { Button } from '../../shared/ui/Button/Button.tsx';

export const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const handleToggleModal = () => {
    document.documentElement.style.overflow =
      document.documentElement.style.overflow === 'hidden' ? 'auto' : 'hidden';
    setShowModal((prev) => !prev);
  };

  return (
    <header className={styles.headerWrapper}>
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
                <li>
                  Реализовано модальное окно, которое Вы сейчас наблюдаете.
                </li>
                <li>К постам добавлены авторы и комментарии.</li>
                <li>
                  Добавлен роутинг. Есть возможность попасть на автора поста или
                  комментария и посмотреть его личный кабинет.
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
