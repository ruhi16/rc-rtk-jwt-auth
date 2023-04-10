import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';


export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://shy-cyan-sockeye-vest.cyclic.app/api/users"}),
    endpoints: (builder) => ({
        loginUser: builder.mutation({

            query: (loginCred: {email: string; password: string}) => {
                return ({
                    url: "/login",
                    method: "post",
                    body: loginCred,
                    header: {
                        'Content-type': 'application/json; charset=UTF-8',
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
                        "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With"
                    }                        
                })
            }

        }),
    })



})


export const { useLoginUserMutation } = authApi;