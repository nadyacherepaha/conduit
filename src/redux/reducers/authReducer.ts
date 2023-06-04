import { createSlice } from '@reduxjs/toolkit';
import { writeTokenForAuthUser, getUserInfo } from '../actions/userActions';
import { RootState } from '../store/store';

export interface AuthUserState {
    user: boolean;
    userInfo: null | User;
}

const initialState: AuthUserState = {
    user: false,
    userInfo: null,
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
        });
        builder.addCase(getUserInfo.fulfilled, (state, action) => {
            state.userInfo = action.payload.user;
        });
    },
});

const selectUser = (state: RootState) => state.user.user;

export default userSlice.reducer;
export const signInUser = userSlice.actions.signInUser();

export { selectUser, getUserInfo };
