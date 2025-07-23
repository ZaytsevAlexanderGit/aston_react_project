import { defaultPostsData } from '../../../../shared/lib/constants.ts';

type UsePostType = {
  userId?: string;
};

export const usePosts = ({ userId }: UsePostType) => {
  let posts = defaultPostsData;

  if (userId) {
    posts = posts.filter((post) => post.authorId === userId);
  }

  return posts;
};
