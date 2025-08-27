// src/features/userSelectors.ts
import { createSelector } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'

export const selectUser = (state: RootState) => state.user
export const selectUserName = (state: RootState) => state.user.name
export const selectIsLoggedIn = (state: RootState) => state.user.loggedIn

// Example of a memoized, derived value:
export const selectGreeting = createSelector(selectUserName, (name) =>
  name ? `Hello, ${name} 👋` : 'Hello!'
)
