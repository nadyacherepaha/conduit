import { createSlice } from '@reduxjs/toolkit';
import { writeTokenForAuthUser } from "../actions/userActions";

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
    extraReducers: (builder) => {
      builder.addCase(writeTokenForAuthUser.fulfilled, (state) => {
        state.user = true;
      })
  },
});

export default userSlice.reducer;
export const signInUser = userSlice.actions.signInUser()
