import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type AuthUser = {
    uid: string
    email: string | null
    displayName: string | null
}

type AuthState = {
    user: AuthUser | null
}

const initialState: AuthState = {
    user: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUserState(state, action: PayloadAction<AuthUser>) {
            state.user = action.payload
        },
        clearUserState(state) {
            state.user = null
        },
    },
})

export const { setUserState, clearUserState } = authSlice.actions
export default authSlice.reducer
