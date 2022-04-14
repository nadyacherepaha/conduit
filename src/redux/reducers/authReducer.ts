import { createSlice } from '@reduxjs/toolkit';

export interface AuthUserState {
  user: boolean;
}

const initialState: AuthUserState = {
  user: false,
};

export const userSlice = createSlice({
  name: 'authUser',
  initialState,
  reducers: {
    signInUser(state) {
      state.user = true;
    },
  },
});

export default userSlice.reducer;
