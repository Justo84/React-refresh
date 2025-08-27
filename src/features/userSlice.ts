// src/features/userSlice.ts
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { userApi } from '../services/userApi'

interface UserState {
  name: string
  loggedIn: boolean
}

const initialState: UserState = {
  name: '',
  loggedIn: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
    login: (state) => {
      state.loggedIn = true
    },
    logout: (state) => {
      state.loggedIn = false
      state.name = '' // optional: clear name on logout
    },
    toggleLogin: (state) => {
      state.loggedIn = !state.loggedIn
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(userApi.endpoints.getUser.matchFulfilled, (state, { payload }) => {
      state.name = payload.name
    })
  },
})

export const { setName, login, logout, toggleLogin } = userSlice.actions
export default userSlice.reducer
