import { axios } from '../lib/axios';
import BASE_URL from '../utils/baseUrl';

export const getArticles = (
    limit: number,
    offset: number,
    tag?: string
): Promise<GetArticlesResponse> => {
    return axios.get(
        `${BASE_URL}/articles?limit=${limit}&offset=${offset}${
            tag ? `&tag=${tag}` : ''
        }`
    );
};

export const postFavorite = (slug: string): Promise<{ article: Article }> => {
    return axios.post(`${BASE_URL}/articles/${slug}/favorite`);
};

export const deleteFavorite = (slug: string): Promise<{ article: Article }> => {
    return axios.delete(`${BASE_URL}/articles/${slug}/favorite`);
};

export const getUser = (): Promise<UserResponse> => {
    return axios.get(`${BASE_URL}/user`);
};
