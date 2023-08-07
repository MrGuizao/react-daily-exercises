import React from 'react'
import { useReducer } from 'react'

const initialState = {
  task: '',
  todos: [],
  address: {
    street: 'Ricardo de freitas, N. 311'
  }
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'text': return { ...state, task: action.payload }
    case 'todo': return { ...state, task: '', todos: [...state.todos, action.payload] }
    case 'change': return { ...state, address: { ...state.address, street: action.payload } }
    default: return state;
  }
}

const App = () => {
  const [{ task, todos, address }, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: 'todo', payload: task })
    dispatch({ type: 'change', payload: address.street })

  }

  return (
    <div>
      <h1>{address.street}</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={task} onChange={(e) => { dispatch({ type: 'text', payload: e.target.value }) }} />
        <input type="text" value={address.street} onChange={(e) => { dispatch({ type: 'change', payload: e.target.value }) }} />
        <button>add</button>
      </form>

      <ul>
        {
          todos.map((todo, index) => <li key={index}>{todo}</li>)
        }
      </ul>
    </div>
  )
}

export default App