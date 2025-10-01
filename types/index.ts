export type StartupCardType = {
  _id: string | number;
  _createdAt: string; // ISO date string
  title: string;
  description: string;
  image: string;
  category: string;
  views: number;
  author: {
    _id: string | number;
    name: string;
  };
};
