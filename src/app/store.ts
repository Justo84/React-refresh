import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counterSlice'
import userReducer from '../features/userSlice' 
import { userApi } from '../services/userApi'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefault) => getDefault().concat(userApi.middleware),
})

// ✅ Add these two exports:
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
