import { useGetAllPostsQuery } from '../../../../entities/post/api/postsApi.ts';

export const usePosts = () => {
  const { data: posts } = useGetAllPostsQuery();

  return { posts };
};
