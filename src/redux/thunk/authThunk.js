// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from 'axios'
// import { BASE_URL } from "../../config";
// import { userExists, userNotExists } from "../reducers/auth";
// import { getOrSavedFromStorage } from "../../libs/feature";

// const loginUser = createAsyncThunk("user/login", async (credentials, { dispatch }) => {
//     try {
//         const config = {
//             withCredentials: true,
//             headers: {
//                 "Content-Type": "application/json"
//             },
//         }

//         const response = await axios.post(`${BASE_URL}/auth/login`, credentials, config);

//         const data = response.data.user;

//         dispatch(userExists(data));
//         console.log(data)
//         console.log(data.role)
        
//        if(data.role){
//         getOrSavedFromStorage({
//             key: 'role',
//             value: data.role,
//             get: false
//         })
//        }
//        else{
//         console.log("role is undefined in the response")
//        }

//         return data

//     } catch (error) {
//         console.log('Error during login please check', error)
//         dispatch(userNotExists())
//         throw error
//     }
// })

// export {loginUser}