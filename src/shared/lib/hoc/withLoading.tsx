import { type ComponentType } from 'react';
import { useLoading } from '../hooks/useLoading.ts';

type withLoadingProps = {
  WrappedComponent: ComponentType;
};

export function withLoading<P extends object>({
  WrappedComponent,
}: withLoadingProps): ComponentType<P> {
  const loading = useLoading();

  return (props: P) => {
    if (loading) {
      return <div>Загрузка...</div>;
    }

    return <WrappedComponent {...(props as P)} />;
  };
}
