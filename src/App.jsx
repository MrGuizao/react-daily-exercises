import React from 'react'
import { useState } from 'react'

const App = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState({ name: '', age: '', number: '' });
  const [click, setClick] = useState(null);

  const handleChange = e => {
    setTask({ ...task, id: crypto.randomUUID(), [e.target.name]: e.target.value });
  }

  const handleSubmit = e => {
    e.preventDefault();
    setTodos([...todos, task]);
    setTask({ name: '', age: '', number: '' })
  }

  const handleClick = id => setClick(id);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={task.name} onChange={handleChange} name='name' placeholder='nome...' />
        <input type="text" value={task.age} onChange={handleChange} name='age' placeholder='idade...' />
        <input type="number" value={task.number} onChange={handleChange} name='number' placeholder='numero...' />
        <button>add</button>
      </form>
      <ul>
        {
          todos.map(todo => <li
            key={todo.id}
            onClick={() => handleClick(todo.id)}
            style={click === todo.id ? { color: 'red' } : null}>
            {todo.name} tem {todo.age} anos de idade e seu numero é {todo.number}
          </li>)
        }
      </ul>
    </>
  )
}

export default App;