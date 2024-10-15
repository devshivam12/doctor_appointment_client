import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../../config'

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL, credentials: 'include' }),
    reducerPath: 'api',
    tagTypes: ['Patient', 'Doctor'],
    endpoints: (build) => ({
        getPatient: build.query({
            query: () => '/user/profile/me',
            credentials : 'include',
            providesTags: ['Patient']
        }),
        getDoctor: build.query({
            query: () => '/doctor/profile/me',
            providesTags: ['Doctor']
        }),
        getAllDoctor: build.query({
            query: () => '/doctor/',
            providesTags: ['Doctor']
        }),
        getUserDetails : build.query({
            query : (id) => `/user/${id}`,
            providesTags : ['Patient']
        })
    })
})

export const {
    useGetPatientQuery,
    useGetDoctorQuery,
    useGetAllDoctorQuery,
    useGetUserDetailsQuery
} = api