import React from 'react'
import { useState } from 'react'

const App = () => {
  const [todos, setTodos] = useState([
    { id: 0, nome: 'guilherme', isComplete: false },
    { id: 1, nome: 'giovanna', isComplete: false },
    { id: 2, nome: 'barbara', isComplete: false },
    { id: 3, nome: 'milena', isComplete: false },
  ])
  const [datas, setDatas] = useState({ nome: '', idade: '', isComplete: false });
  const [clicked, setClicked] = useState(null);


  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, datas]);
    setDatas({ nome: '', idade: '', isComplete: false });
  }
  function handleChange(e) {
    setDatas({ ...datas, id: crypto.randomUUID(), [e.target.name]: e.target.value });
  }
  function handleDelete(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }
  function handleUpdate(id) {
    setTodos(todos.map(todo => id === todo.id ? { ...todo, isComplete: !todo.isComplete } : todo))
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={datas.nome} onChange={handleChange} name='nome' placeholder='nome...' />
        <input type="text" value={datas.idade} onChange={handleChange} name='idade' placeholder='idade...' />
        <button>add</button>
      </form>
      <ul>
        {
          todos.map(todo => <div
            style={todo.isComplete ? { textDecoration: 'line-through' } : null}
            onClick={() => setClicked(todo.id)}>
            <li key={todo.id}>{todo.nome} tem {todo.idade} anos</li>
            <span onClick={() => handleUpdate(todo.id)}>✔</span>
            <span onClick={() => handleDelete(todo.id)}>❌</span>
          </div>)
        }
      </ul>
    </>
  )
}

export default App;