import { Profile } from './profile';

export type GetArticlesResponse = {
  data: {
    articles: Article[];
    articlesCount: number;
  }
}

export interface Article {
  author: Profile;
  body?: string;
  createdAt: string;
  description: string;
  favorited: boolean;
  favoritesCount: number;
  slug?: string;
  tagList: string[];
  title: string;
  updatedAt?: string;
}
