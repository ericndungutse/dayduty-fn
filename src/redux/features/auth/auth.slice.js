import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    isLoggedin: false,
    token: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,

    reducers: {
        loginUser: (state, action) => {
            const { user, token } = action.payload
            state.user = user
            state.isLoggedin = true
            state.token = token
            localStorage.setItem("token", token)
        },

        logoutUser: (state) => {
            state.user = null
            state.token = null
            state.isLoggedin = false
            localStorage.removeItem("token")
        }
    }
})

export const { loginUser, logoutUser } = authSlice.actions

export default authSlice.reducer