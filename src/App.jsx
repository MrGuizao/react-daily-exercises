import React, { useReducer, useState } from 'react';

// Definindo o estado inicial do reducer
const initialState = {
  todos: [],
};

// Definindo as ações para atualizar o estado
const actionTypes = {
  ADD_TODO: 'ADD_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO',
  DELETE_TODO: 'DELETE_TODO',
};

// Reducer que trata as ações para atualizar o estado
const todoReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case actionTypes.TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    case actionTypes.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};

const TodoList = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      const newTodoItem = {
        id: Date.now(),
        text: newTodo,
        completed: false,
      };
      dispatch({ type: actionTypes.ADD_TODO, payload: newTodoItem });
      setNewTodo('');
    }
  };

  const handleToggleTodo = (id) => {
    dispatch({ type: actionTypes.TOGGLE_TODO, payload: id });
  };

  const handleDeleteTodo = (id) => {
    dispatch({ type: actionTypes.DELETE_TODO, payload: id });
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input type="text" value={newTodo} onChange={handleInputChange} />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      <ul>
        {state.todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
              onClick={() => handleToggleTodo(todo.id)}
            >
              {todo.text}
            </span>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
