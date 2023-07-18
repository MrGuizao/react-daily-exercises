import React, { useState } from 'react'

const App = () => {
  const [todos, setTodos] = useState([]);
  const [values, setValues] = useState({ name: '', age: '' });

  const handleSubmit = e => {
    e.preventDefault();
    setTodos([...todos, values]);
    setValues({ name: '', age: '' });
  }

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value, id: crypto.randomUUID() });
    console.log(name, value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name='name' placeholder='nome' value={values.name} onChange={handleChange} />
        <input type="text" name='age' placeholder='idade' value={values.age} onChange={handleChange} />
        <button>add</button>
      </form>
      {
        todos.map(todo => <li key={todo.id}>{todo.name} tem {todo.age} anos</li>)
      }
    </>
  )
}

export default App