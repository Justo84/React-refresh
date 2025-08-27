import { useAppDispatch, useAppSelector } from './app/hooks'
import { increment, decrement, reset } from './features/counterSlice'
import UserPanel from './features/UserPanel'
import UserFromApi from './features/UserFromApi' 

function App() {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Redux Counter</h1>
      <h2>{count}</h2>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
       <UserPanel />
       <UserFromApi />
    </div>
  )
}

export default App
