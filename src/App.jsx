import React from 'react'
import { useState } from 'react'

const App = () => {
  const [todos, setTodos] = useState([
    { id: 0, nome: 'guilherme' },
    { id: 1, nome: 'giovanna' },
    { id: 2, nome: 'barbara' },
    { id: 3, nome: 'milena' },
  ])
  const [datas, setDatas] = useState({ nome: '', idade: '' });
  const [clicked, setClicked] = useState(null)

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, datas]);
    setDatas({ nome: '', idade: '' });
  }

  function handleChange(e) {
    setDatas({ ...datas, id: crypto.randomUUID(), [e.target.name]: e.target.value });
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
          todos.map(todo => <li
            key={todo.id}
            onClick={() => setClicked(todo.id)}
            style={todo.id === clicked ? { color: 'red' } : null}
          >
            {todo.nome} tem {todo.idade} anos
          </li>)
        }
      </ul>
    </>
  )
}

export default App