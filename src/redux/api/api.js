import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../../config'

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL, credentials: 'include' }),
    reducerPath: 'api',
    tagTypes: ['Patient', 'Doctor'],
    endpoints: (build) => ({
        getPatient: build.query({
            query: () => '/user/profile/me',
            credentials: 'include',
            providesTags: ['Patient']
        }),
        getDoctor: build.query({
            query: () => '/doctor/profile/me',
            providesTags: ['Doctor']
        }),
        getAllDoctor: build.query({
            query: ({ query, specialization, minRating, minPrice, maxRating, maxPrice, location, page = 1, limit = 10 }) => ({
                url: '/doctor',
                params: {
                    ...(query && { query }),
                    ...(specialization && { specialization }),
                    ...(maxPrice && { maxPrice }),
                    ...(minPrice && { minPrice }),
                    ...(maxRating && { maxRating }),
                    ...(minRating && { minRating }),
                    ...(location && { location }),
                    page,
                    limit
                }
            }),
            providesTags: ['Doctor']
        }),
        getUserDetails: build.query({
            query: (id) => `/user/${id}`,
            providesTags: ['Patient']
        })
    })
})

export const {
    useGetPatientQuery,
    useGetDoctorQuery,
    useGetAllDoctorQuery,
    useGetUserDetailsQuery
} = api