import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { SchoolState } from '../features/schoolSlice';


export const authApi = createApi({
    reducerPath: "authApi",

    baseQuery: fetchBaseQuery({ baseUrl: "https://frightened-earmuffs-dove.cyclic.app/api"}),
    tagTypes:["Auth", "Session", "School"],
    endpoints: (builder) => ({

        loginUser: builder.mutation({
            query: (loginCred: {email: string; password: string}) => {
                return ({
                    url: "/users/login",
                    method: "post",
                    body: loginCred,
                    header: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    }                        
                })
            },
            invalidatesTags: ["Auth"]
        }),


        getAllSessions: builder.query({
            query: () => ({
                url: "/basics/session",
                method: 'GET',
                
                header: {
                    'Content-type': 'application/json; charset=UTF-8',
                }

            }),
            providesTags: ["Session"]
        }),




        getAllSchools: builder.query<void,void>({
            query: () => ({
                url: "/basics/schools",
                method: 'GET',
                
                header: {
                    'Content-type': 'application/json; charset=UTF-8',
                }

            }),
            providesTags:["School"]
        })
        
    })

});


export const { 
    useLoginUserMutation, 
    useGetAllSessionsQuery,
    useGetAllSchoolsQuery,

} = authApi;