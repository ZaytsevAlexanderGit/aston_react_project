import { useNavigate, useParams } from 'react-router-dom';
import { TodosList } from '../../widgets/TodosList/TodosList.tsx';

export const UserPageTodos = () => {
  const { id: userId } = useParams();
  const navigate = useNavigate();

  if (!userId) navigate('/posts');

  return <TodosList userId={userId} />;
};
