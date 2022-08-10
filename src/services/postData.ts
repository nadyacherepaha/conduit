import axios from 'axios';
import BASE_URL from '../utils/baseUrl';

export const signIn = async (
  email: string,
  password: string
): Promise<string> => {
  const result = await axios.post(`${BASE_URL}/users/login`, {
    user: {
      email: `${email}`,
      password: `${password}`,
    },
  });

  return result.data.user.token;
};

export const signUp = async (
  username: string,
  email: string,
  password: string
): Promise<string> => {
  const result = await axios.post(`${BASE_URL}/users`, {
    user: {
      email: `${email}`,
      password: `${password}`,
      username: `${username}`,
    },
  });

  return result.data.user.token;
};
