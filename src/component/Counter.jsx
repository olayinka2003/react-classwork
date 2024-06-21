import React from 'react'
import { useReducer } from 'react'

export const Counter = () => {

  const initialState = {count: 0}

  function countReducer(state, action){
    switch (action.type) {
      case 'increment':
        return {count: state.count + 1}
      case 'DECREMENT':
        return {count: state.count - 1}
        case 'RESET':
          return {count: 0}
      default:
        return {count: state.count}
    }
  }

  const [state, dispatch] = useReducer(countReducer, initialState)
  return (
    <div>
            <p>Count: {state.count}</p>
        <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
  )
}
