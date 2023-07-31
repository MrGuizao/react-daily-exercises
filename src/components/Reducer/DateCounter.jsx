import React, { useReducer } from 'react'
const initialState = { value: 0 }

const reducer = (state, action) => {
    switch (action.type) {
        case 'plus': return { ...state, value: state.value + 1 }
        case 'minus': return { ...state, value: state.value - 1 }
        default: throw new Error('cu');
    }
}

const DateCounter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h1>{state.value}</h1>
            <button onClick={() => dispatch({ type: 'plus' })}>plus</button>
            <button onClick={() => dispatch({ type: 'minus' })}>minus</button>
        </div>
    )
}

export default DateCounter