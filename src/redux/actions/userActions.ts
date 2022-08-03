import { createAsyncThunk } from '@reduxjs/toolkit';
import storage from "../../utils/storage";

export const writeTokenForAuthUser = createAsyncThunk('authToken', async (token: string) => {
    storage.setToken(token);
});
