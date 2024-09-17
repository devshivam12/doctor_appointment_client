import { configureStore } from '@reduxjs/toolkit'
import authSlice from './reducers/auth'

const store = configureStore({
    reducer: {
        [authSlice.name]: authSlice.reducer,
        // [miscSlice.name] : miscSlice.reducer,
        // [api.reducerPath] : api.reducer
    },

    // middleware  : (mid) => [...mid(), api.middleware]
})

export default store