// import React, { useState } from 'react'
// import './style.css';

// function App() {
//     const [todos, setTodos] = useState([]);
//     const [newTask, setNewTask] = useState('');

//     const handleChange = event => setNewTask(event.target.value);
//     const handleSubmit = e => {
//         e.preventDefault();
//         setTodos([...todos, { id: crypto.randomUUID(), newTask, isComplete: false }]);
//         setNewTask('');
//     }
//     const deleteTask = id => setTodos(todos.filter(todo => todo.id !== id));
//     const updateTask = id => setTodos(todos.map(todo => todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo))

//     return (
//         <>
//             <form onSubmit={handleSubmit} className='main-box'>
//                 <input type="text" value={newTask} onChange={handleChange} required />
//                 <button>add task</button>
//             </form>
//             {
//                 todos.map(todo => {
//                     return (
//                         <div className='line' key={todo.id}
//                             style={todo.isComplete ? { backgroundColor: 'green' } : null}
//                         >
//                             <li style={todo.isComplete ? { textDecoration: 'line-through' } : null}>
//                                 {todo.newTask}
//                             </li>
//                             <div>
//                                 <span onClick={() => updateTask(todo.id)}>✔</span>
//                                 <span onClick={() => deleteTask(todo.id)}>❌</span>
//                             </div>
//                         </div>
//                     )
//                 })
//             }
//         </>
//     )
// }

// export default App;



import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const App = () => {
    const [todos, setTodos] = useState([]);
    const [name, setName] = useState('');

    const handleChange = event => setName(event.target.value);
    const handleDelete = id => setTodos(todos.filter(todo => todo.id !== id))
    const handleUpdate = id => setTodos(todos.map(todo => todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo))
    const handleSubmit = event => {
        event.preventDefault();
        setTodos([...todos, { id: crypto.randomUUID(), name, isComplete: false }]);
        setName('');
    }

    useEffect(() => {
        const fetchCall = async () => {
            await fetch('https://jsonplaceholder.typicode.com/users')
                .then(res => res.json())
                .then(data => setTodos(data))
        }
        fetchCall();
    }, [])

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={handleChange} />
                <button>add</button>
            </form>
            <ul>
                {
                    todos.map(todo => {
                        return (
                            <div key={todo.id} style={todo.isComplete ? { color: 'green' } : null}>
                                <li>{todo.name}</li>
                                <div>
                                    <span onClick={() => handleDelete(todo.id)}>X</span>
                                    <span onClick={() => handleUpdate(todo.id)}>complete</span>
                                </div>
                            </div>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default App;