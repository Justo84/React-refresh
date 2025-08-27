// src/services/userApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface UserDto {
  id: string
  name: string
  email: string
}

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    // Option A (mock later with Express/MSW): 
    baseUrl: 'https://jsonplaceholder.typicode.com',
    // Option B (use a real public API immediately):
    // baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getUser: builder.query<UserDto, string>({
      // If using Option A: '/api/users/:id'
      // If using Option B: '/users/:id'
      query: (id) => `/users/${id}`,
      providesTags: (result, _err, id) => [{ type: 'User', id }],
    }),
    updateUserName: builder.mutation<UserDto, { id: string; name: string }>({
      query: ({ id, name }) => ({
        url: `/users/${id}`,
        method: 'PATCH',
        body: { name },
      }),
      invalidatesTags: (result) =>
        result ? [{ type: 'User', id: result.id }] : [],
    }),
  }),
})

// Auto-generated React hooks:
export const { useGetUserQuery, useUpdateUserNameMutation } = userApi
