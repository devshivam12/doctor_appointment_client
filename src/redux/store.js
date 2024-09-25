import { configureStore } from '@reduxjs/toolkit'
// import authSlice from './reducers/auth'
import authReducer from './reducers/auth'
import {api } from './api/api'

const store = configureStore({
    reducer: {
        auth : authReducer,
        // [miscSlice.name] : miscSlice.reducer,
        [api.reducerPath] : api.reducer
    },

    middleware  : (getDefault) => getDefault().concat(api.middleware)
})

export default store