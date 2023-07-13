import React, { useState } from 'react'
import './style.css';

const App = () => {
    const [todos, setTodods] = useState([]);
    const [name, setName] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        const newTodo = {
            id: crypto.randomUUID(),
            name,
        }
        setTodods([...todos, newTodo]);
        setName('');
    }

    const handleChange = e => setName(e.target.value);

    return (
        <div>
            <form onSubmit={handleSubmit} className='style-box'>
                <input type="text" onChange={handleChange} value={name} />
                <button>add</button>
            </form>
            <ul>
                {
                    todos.map(todo => <li key={todo.id}>{todo.name}</li>)
                }
            </ul>
        </div>
    )
}

export default App;