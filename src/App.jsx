import React from 'react'
import { useReducer } from 'react'

const initialState = {
  task: '',
  todos: [],
  address: {
    street: 'todos:'
  }
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'text': return { ...state, task: action.payload }
    case 'todo': return { ...state, task: '', todos: [...state.todos, action.payload] }
    case 'change': return { ...state, address: { ...state.address, street: action.payload } }
    case 'delete': return { ...state, todos: state.todos.filter(todo => todo.id !== action.payload) }
    default: return state;
  }
}

const App = () => {
  const [{ task, todos, address }, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = e => {
    e.preventDefault();
    const newTodo = { id: crypto.randomUUID(), task }
    dispatch({ type: 'todo', payload: newTodo })
    dispatch({ type: 'change', payload: address.street })
  }

  const handleDelete = id => dispatch({ type: 'delete', payload: id })

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
          todos.map(todo => <li key={todo.id} onClick={() => handleDelete(todo.id)}>{todo.task}</li>)
        }
      </ul>
    </div>
  )
}

export default App