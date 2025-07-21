import type { PostProps } from '../../../entities/post/model/types.ts';

type FilterByLengthProps = {
  posts: PostProps[];
  titleLength: number;
};

export const filterByLength = ({ posts, titleLength }: FilterByLengthProps) => {
  return posts.filter((post) => post.title.length >= titleLength);
};
