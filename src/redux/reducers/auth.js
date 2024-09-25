import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getOrSavedFromStorage } from "../../libs/feature"
import { BASE_URL } from "../../config";
import axios from "axios";

const initialState = {
    isAuthenticate: false,
    isLoading: true,
    user: null,
    role: getOrSavedFromStorage({ key: 'role', get: true })
};

export const register = createAsyncThunk('/auth/register',
    async (formData) => {
        const response = await axios.post(`${BASE_URL}/auth/register`, formData, {
            withCredentials: true
        })
        return response.data
    }
)

export const login = createAsyncThunk('/auth/login',
    async (formData) => {
        const response = await axios.post(`${BASE_URL}/auth/login`, formData, {
            withCredentials: true
        })
        return response.data
    }
)

export const logout = createAsyncThunk('/auth/logout',
    async () => {
        const response = await axios.post(`${BASE_URL}/auth/logout`, {}, {
            withCredentials: true
        })

        return response.data
    }
)

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action) => { }
    },
    extraReducers: (builder) => {
        builder.addCase(register.pending, (state) => {
            state.isLoading = true
        })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false,
                    state.user = null;
                state.isAuthenticate = false
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false;
                state.user = null;
                state.isAuthenticate = false
            })
            .addCase(login.pending, (state, action) => {
                state.isLoading = true;

            })
            .addCase(login.fulfilled, (state, action) => {
                console.log(action)
                state.isLoading = false;

                if (action.payload.success) {
                    const role = action?.payload?.user?.role
                    state.role = role
                    state.isAuthenticate = true

                    getOrSavedFromStorage({ key: 'role', value: role, get: true })
                }
                else {
                    state.isLoading = false
                    state.isAuthenticate = false
                    state.user = null;
                    state.role = null
                }
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.user = null;
                state.isAuthenticate = false
                state.role = null

            })
            .addCase(logout.fulfilled, (state, action) => {
                state.isAuthenticate = false;
                state.user = null;
                state.isLoading = false

                getOrSavedFromStorage({ key: 'role', value: null, get: false })
            })
    }
})

export const { setUser } = authSlice.actions
export default authSlice.reducer