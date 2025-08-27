// src/features/UserPanel.tsx
import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { setName, login, logout, toggleLogin } from './userSlice'

export default function UserPanel() {
  const dispatch = useAppDispatch()
  const { name, loggedIn } = useAppSelector((s) => s.user)
  const [draft, setDraft] = useState(name)

  return (
    <div style={{ border: '1px solid #ddd', borderRadius: 8, padding: 16, marginTop: 24 }}>
      <h2>User Panel</h2>
      <p>Status: <strong>{loggedIn ? 'Logged in' : 'Logged out'}</strong></p>

      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        <input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder="Enter name"
        />
        <button onClick={() => dispatch(setName(draft))}>Save Name</button>
      </div>

      <div style={{ display: 'flex', gap: 8 }}>
        {!loggedIn ? (
          <button onClick={() => dispatch(login())}>Log In</button>
        ) : (
          <button onClick={() => dispatch(logout())}>Log Out</button>
        )}
        <button onClick={() => dispatch(toggleLogin())}>Toggle</button>
      </div>

      {name && <p style={{ marginTop: 12 }}>Hello, <strong>{name}</strong> 👋</p>}
    </div>
  )
}
