import { useReducer, useEffect, createContext, useState } from "react";


const getUserFromLocalStorage = () => {
    try {
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user) : null;
    } catch (error) {
        console.error("Failed to parse user from localStorage", error);
        return null;
    }
};

const initialState = {
    user: getUserFromLocalStorage(),
    role: localStorage.getItem('role') || null,
    token: localStorage.getItem('token') || null,
};

export const authContext = createContext(initialState);

const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN_START':
            return {
                user: null,
                role: null,
                token: null
            };

        case 'LOGIN_SUCCESS':
            return {
                user: action.payload.user,
                token: action.payload.token,
                role: action.payload.role
            };

        case 'LOGOUT':
            return {
                user: null,
                token: null,
                role: null
            };

        default:
            return state;
    }
}

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);
    const [isInitialized, setIsInitialized] = useState(false)
    
    useEffect(() => {
        setIsInitialized(true)
        localStorage.setItem('user', JSON.stringify(state.user));
        localStorage.setItem('token', state.token || '');
        localStorage.setItem('role', state.role || '');
    }, [state]);

    if(!isInitialized){
        return <div>Loading....</div>
    }

    return (
        <authContext.Provider value={{ ...state, dispatch }}>
            {children}
        </authContext.Provider>
    );
}
