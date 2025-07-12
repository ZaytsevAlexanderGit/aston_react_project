import { defaultAuthorsData } from '../../entities/post/constants.ts';

export const getCommentAuthorName = ({
  id,
}: {
  id: string;
}): string | undefined => {
  return defaultAuthorsData.find((author) => author.id === id)?.name;
};
