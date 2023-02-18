import { Profile } from './profile';

export type GetArticlesResponse = {
  data: {
    articles: Article[];
    articlesCount: number;
  }
}

export interface Article {
  author: Profile;
  authorId?: number;
  body?: string;
  createdAt: string;
  description: string;
  favorited: boolean;
  favoritedBy?: {
    bio: string | null;
    demo: boolean;
    email: string;
    id: number;
    image: string | null;
    password: string;
    username: string;
  }[];
  favoritesCount: number;
  id?: number;
  slug: string;
  tagList: string[];
  title: string;
  updatedAt?: string;
}
