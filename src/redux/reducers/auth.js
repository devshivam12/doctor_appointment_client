import { createSlice } from "@reduxjs/toolkit"
import { getOrSavedFromStorage } from "../../libs/feature"


const initialState = {
    user: null,
    loader: true,
    role: getOrSavedFromStorage({
        key: 'role',
        get: true
    }) || ''
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        userExists: (state, action) => {
            state.user = action.payload
            state.loader = false
            state.role = action.payload.role
        },
        userNotExists: (state) => {
            state.user = "abc"
            state.loader = true
            state.role = ""

            localStorage.removeItem('role')
        }
    }
})

export default authSlice

export const { userExists, userNotExists } = authSlice.actions; 