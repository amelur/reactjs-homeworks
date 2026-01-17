import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUserState(state, action) {
            state.user = action.payload;
        },
        clearUserState(state) {
            state.user = null;
        },
    },
});

export const { setUserState, clearUserState } = authSlice.actions;
export default authSlice.reducer;
