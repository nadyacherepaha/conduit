import { axios } from '../lib/axios';
import BASE_URL from '../utils/baseUrl';
import { GetArticlesResponse, Article } from '../types/article';

export const getArticles = (
  limit: number,
  offset: number,
  tag?: string,
): Promise<GetArticlesResponse> => {
  return axios.get(`${BASE_URL}/articles?limit=${limit}&offset=${offset}${tag ? `&tag=${tag}` : ''}`);
};

export const postFavorite = (slug: string): Promise<{ data: { article: Article }}> => {
  return axios.post(`${BASE_URL}/articles/${slug}/favorite`);
};

export const deleteFavorite = (slug: string): Promise<{ data: { article: Article }}> => {
  return axios.delete(`${BASE_URL}/articles/${slug}/favorite`);
};
