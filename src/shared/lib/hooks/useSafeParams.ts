import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const useSafeParams = <T extends string>(paramNames: T[]) => {
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (paramNames.some((name) => params[name] === undefined)) {
      navigate('/posts');
    }
  }, [params, navigate, paramNames]);

  return params as Record<T, string>;
};
