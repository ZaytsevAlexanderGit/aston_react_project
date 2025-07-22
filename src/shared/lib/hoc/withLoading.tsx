import { type ComponentType, useEffect, useState } from 'react';

export function withLoading<P extends object>(
  WrappedComponent: ComponentType<P>
): ComponentType<P> {
  return (props: P) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000);

      return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
      return <div>Загрузка...</div>;
    }

    return <WrappedComponent {...(props as P)} />;
  };
}
