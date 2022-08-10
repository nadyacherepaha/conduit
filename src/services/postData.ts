import axios from 'axios';
import BASE_URL from '../utils/baseUrl';
import { AuthResponse } from '../types/auth';

export const signIn = async (
  email: string,
  password: string
): Promise<AuthResponse> => {
  return await axios.post(`${BASE_URL}/users/login`, {
    user: {
      email: `${email}`,
      password: `${password}`,
    },
  });
};

export const signUp = async (
  username: string,
  email: string,
  password: string
): Promise<AuthResponse> => {
  return await axios.post(`${BASE_URL}/users`, {
    user: {
      email: `${email}`,
      password: `${password}`,
      username: `${username}`,
    },
  });
};
