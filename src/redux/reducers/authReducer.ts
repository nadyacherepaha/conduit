import { createSlice } from '@reduxjs/toolkit';

export interface AuthUserState {
  user: boolean;
}

const initialState: AuthUserState = {
  user: false,
};

const sliceUser = 'authUser';

export const userSlice = createSlice({
  name: sliceUser,
  initialState,
  reducers: {
    signInUser(state) {
      state.user = true;
    },
  },
});

export default userSlice.reducer;
