export type PostProps = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type VisibleComments = Record<string, boolean>;
