import React from 'react'
import { useState } from 'react'

const App = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState({ name: '', age: '' });

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, task]);
    setTask({ name: '', age: '' });
  }

  function handleChange(e) {
    setTask({ ...task, id: crypto.randomUUID(), [e.target.name]: e.target.value, });
  }

  function handleDelete(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={task.name} name='name' onChange={handleChange} placeholder='nome...' />
        <input type="text" value={task.age} name='age' onChange={handleChange} placeholder='age...' />
        <button>add</button>
      </form>
      <ul>
        {
          todos.map(todo => <li key={todo.id}>{todo.name} tem {todo.age} anos<button onClick={() => handleDelete(todo.id)}>delete</button></li>)
        }
      </ul>
    </>
  )
}

export default App;





// import React, { useState } from 'react';

// const App = () => {
//   const [todos, setTodos] = useState([]);
//   const [task, setTask] = useState({ name: '', age: '' });

//   function handleSubmit(e) {
//     e.preventDefault();
//     setTodos([...todos, task]);
//     setTask({ name: '', age: '' });
//   }

//   function handleChange(e) {
//     setTask({ ...task, id: crypto.randomUUID(), [e.target.name]: e.target.value });
//   }

//   function handleDelete(id) {
//     setTodos(todos.filter(todo => todo.id !== id));
//   }

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={task.name}
//           name='name'
//           onChange={handleChange}
//           placeholder='Nome...'
//           required // Defina o campo como obrigatório
//         />
//         <input
//           type="text"
//           value={task.age}
//           name='age'
//           onChange={handleChange}
//           placeholder='Idade...'
//           required // Defina o campo como obrigatório
//         />
//         <button type="submit">Adicionar</button>
//       </form>
//       <ul>
//         {todos.map((todo) => (
//           <li key={todo.id}>
//             {todo.name} tem {todo.age} anos
//             <button onClick={() => handleDelete(todo.id)}>Deletar</button>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

// export default App;