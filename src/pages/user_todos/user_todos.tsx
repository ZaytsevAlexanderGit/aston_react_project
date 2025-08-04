import { TodosList } from '../../widgets/TodosList/TodosList.tsx';
import { useSafeParams } from '../../shared/lib/hooks/useSafeParams.ts';

export const UserPageTodos = () => {
  const { id: userId } = useSafeParams(['id']);

  return <TodosList userId={userId} />;
};
