import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUser } from '../../services/api';
import storage from '../../utils/storage';

export const writeTokenForAuthUser = createAsyncThunk(
    'authToken',
    (token: string) => {
        storage.setToken(token);
    }
);

export const getUserInfo = createAsyncThunk<UserResponse>(
    'user/userInfo',
    async () => {
        return await getUser();
    }
);
