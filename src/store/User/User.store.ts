import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from '../../../types'

export const user = createApi({
    reducerPath: 'userApi',
    tagTypes: ["User"],
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://62f112c0e2bca93cd243ad8e.mockapi.io/api/v1/users',
        prepareHeaders(headers) {
            headers.set("Content-type", "application/json")
            return headers
        }
    }),
    endpoints(builder) {
        return {
            getUsers: builder.query<User[], void>({
                query() {
                    return '/'
                },
                providesTags: ["User"]
            }),
            getUser: builder.query<User, number>({
                query(id) {
                    return `/${id}`
                },
            }),
            adduser: builder.mutation<User, Partial<User>>({
                query(body) {
                    return {
                        url: '/',
                        method: 'POST',
                        body
                    }
                },
                invalidatesTags: ["User"]
            }),
            updateUser: builder.mutation<User, Partial<User> & Pick<User, 'id'>>({
                query: (body) => ({
                    url: `/${body.id}`,
                    method: 'PUT',
                    body
                }),
                invalidatesTags: ["User"]
            }),
            deleteUser: builder.mutation<User, number>({
                query: (id) => ({
                    url: `/${id}`,
                    method: 'DELETE'
                }),
                invalidatesTags: ["User"]
            })
        }
    }
})

export const { useGetUserQuery, useGetUsersQuery, useDeleteUserMutation, useAdduserMutation, useUpdateUserMutation } = user