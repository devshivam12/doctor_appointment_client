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

export const checkAuth = createAsyncThunk('/auth/checkauth', async () => {
    const response = await axios.get(`${BASE_URL}/auth/checkauth`, {
        withCredentials: true,
        headers: {
            "Cache-Control": "no-store, no-cache, must-revalidate, must-revalidate",
        },
    });
    return response.data;
});

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

                    getOrSavedFromStorage({ key: 'role', value: role, get: false })
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
            .addCase(checkAuth.pending, (state) => {
                state.isLoading = true
            })
            .addCase(checkAuth.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload.success ? action.payload.user : null;
                state.isAuthenticate = action.payload.success
            })
            .addCase(checkAuth.rejected, (state, action) => {
                state.isLoading = false;
                state.user = null
                state.isAuthenticate = false
            })
    }
})

export const { setUser } = authSlice.actions
export default authSlice.reducer