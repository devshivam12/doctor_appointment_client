import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../../config'

export const api = createApi({
    baseQuery : fetchBaseQuery({ baseUrl : BASE_URL, credentials : 'include'}),
    reducerPath: 'api',
    tagTypes : ['Patient', 'Doctor'],
    endpoints : (build) => ({
        getPatient : build.query({
            query : () => '/user/profile/me',
            providesTags : ['Patient']
        }),
        getDoctor : build.query({
            query :() => '/doctor/profile/me',
            providesTags : ['Doctor']
        })
    })
})

export const {
    useGetPatientQuery,
    useGetDoctorQuery
} = api