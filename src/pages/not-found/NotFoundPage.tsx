import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Routes } from '../../app/providers/router/routes.ts';

export const NotFoundPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => navigate(Routes.ALL_POSTS), 1500);
  }, []);

  return (
    <>
      <h2> Такой страницы не существует.</h2>
      <p>Перенаправляем Вас на главную страницу.</p>
    </>
  );
};
