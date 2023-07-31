import React from 'react';
import { useState } from 'react';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState({ name: '', age: '', size: '' });
  const [click, setClick] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();
    setTodos([...todos, task]);
    setTask({ name: '', age: '', size: '' });
  }
  const handleChange = e => setTask({ ...task, id: crypto.randomUUID(), [e.target.name]: e.target.value })
  const handleClick = id => setClick(id);
  const handleDelete = id => setTodos(todos.filter(todo => todo.id !== id));

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={task.name} name='name' placeholder='name' onChange={handleChange} />
        <input type="text" value={task.age} name='age' placeholder='age' onChange={handleChange} />
        <input type="text" value={task.size} name='size' placeholder='size' onChange={handleChange} />
        <button>add</button>
      </form>
      <ul>
        {
          todos.map(todo => <li
            key={todo.id}
            onClick={() => handleClick(todo.id)}
            style={click === todo.id ? { textDecoration: 'line-through' } : null}>
            {todo.name} tem {todo.age} anos de idade e altura de {todo.size} Cm
            <span onClick={() => handleDelete(todo.id)}>❌</span>
          </li>)
        }
      </ul>
    </>
  )
}

export default App;