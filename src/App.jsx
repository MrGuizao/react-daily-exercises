import React, { useState } from 'react'
import './style.css';


function App() {
    const [todos, setTodos] = useState([]);
    const [newTask, setNewTask] = useState('');

    const handleChange = event => setNewTask(event.target.value);
    const handleSubmit = e => {
        e.preventDefault();
        setTodos([...todos, { id: crypto.randomUUID(), newTask, isComplete: false }]);
        setNewTask('');
    }
    const deleteTask = id => setTodos(todos.filter(todo => todo.id !== id));
    const updateTask = id => setTodos(todos.map(todo => todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo))

    return (
        <>
            <form onSubmit={handleSubmit} className='main-box'>
                <input type="text" value={newTask} onChange={handleChange} required />
                <button>add task</button>
            </form>
            {
                todos.map(todo => {
                    return (
                        <div className='line' key={todo.id}
                            style={todo.isComplete ? { backgroundColor: 'green' } : null}
                        >
                            <li style={todo.isComplete ? { textDecoration: 'line-through' } : null}>
                                {todo.newTask}
                            </li>
                            <div>
                                <span onClick={() => updateTask(todo.id)}>✔</span>
                                <span onClick={() => deleteTask(todo.id)}>❌</span>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default App;