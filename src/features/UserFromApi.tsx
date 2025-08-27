import { useState } from 'react'
import { useGetUserQuery, useUpdateUserNameMutation } from '../services/userApi'

export default function UserFromApi() {
  const [id, setId] = useState('1')

  // Query hook
  const { data, isFetching, isError, refetch } = useGetUserQuery(id)

  // Mutation hook
  const [updateUserName, { isLoading: isUpdating, isError: isUpdateError }] =
    useUpdateUserNameMutation()

  return (
    <div style={{ border: '1px solid #ddd', borderRadius: 8, padding: 16, marginTop: 24 }}>
      <h2>User (RTK Query)</h2>

      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        <label>
          ID:{' '}
          <input value={id} onChange={(e) => setId(e.target.value)} style={{ width: 60 }} />
        </label>
        <button onClick={() => refetch()} disabled={isFetching}>Refetch</button>
        <span>Fetching: {isFetching ? 'yes' : 'no'}</span>
      </div>

      {isError && <p>Failed to load user.</p>}

      {data && (
        <>
          <p>
            <strong>{data.name}</strong> — {data.email}
          </p>
          <button
            disabled={isUpdating}
            onClick={() =>
              updateUserName({ id: data.id, name: data.name + '!' })
            }
          >
            {isUpdating ? 'Updating...' : 'Add “!” to name'}
          </button>
          {isUpdateError && <p>Update failed.</p>}
        </>
      )}
    </div>
  )
}
