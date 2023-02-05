import { axios } from '../lib/axios';
import BASE_URL from '../utils/baseUrl';
import { GetArticlesResponse } from '../types/article';

export const getArticles = (
  limit: number,
  offset: number
): Promise<GetArticlesResponse> => {
  return axios.get(`${BASE_URL}/articles?limit=${limit}&offset=${offset}`);
};
