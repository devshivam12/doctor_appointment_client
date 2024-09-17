// import { useReducer, useEffect, createContext, useState } from "react";


// const initialState = {
//     token: localStorage.getItem('token') || null,
//     user: JSON.parse(localStorage.getItem('user')) || null,
//     role: localStorage.getItem('role') || null,
// };

// export const authContext = createContext(initialState);

// const authReducer = (state, action) => {
//     switch (action.type) {
//         case 'LOGIN_START':
//             return {
//                 user: null,
//                 role: null,
//                 token: null
//             };

//         case 'LOGIN_SUCCESS':
//             localStorage.setItem('token', action.payload.token);
//             localStorage.setItem('user', JSON.stringify(action.payload.user));
//             localStorage.setItem('role', action.payload.role);

//             return {
//                 ...state,
//                 token: action.payload.token,
//                 user: action.payload.user,
//                 role: action.payload.role,
//             };

//         case 'LOGOUT':
//             localStorage.removeItem('token');
//             localStorage.removeItem('user');
//             localStorage.removeItem('role');
            
//             return {
//                 ...state,
//                 user: null,
//                 token: null,
//                 role: null
//             };

//         default:
//             return state;
//     }
// }

// export const AuthContextProvider = ({ children }) => {
//     const [state, dispatch] = useReducer(authReducer, initialState);
//     const [isInitialized, setIsInitialized] = useState(false)

//     useEffect(() => {
//         setIsInitialized(true)
//     }, []);

//     useEffect(() => {
//         if (state.token) {
//             localStorage.setItem('user', JSON.stringify(state.user));
//             localStorage.setItem('token', state.token || '');
//             localStorage.setItem('role', state.role || '');
//         }
//     }, [state.token, state.role, state.user])

//     if (!isInitialized) {
//         return <div>Loading....</div>
//     }

//     return (
//         <authContext.Provider value={{ ...state, dispatch }}>
//             {children}
//         </authContext.Provider>
//     );
// }
