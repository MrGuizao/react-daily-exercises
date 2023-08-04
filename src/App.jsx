import React from 'react'
import { useReducer } from 'react'

const initialState = {
  count: 0,
  text: '',
  one: 0,
  two: 0,
  random: null,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'add': return { ...state, count: state.count + 1 }
    case 'sub': return { ...state, count: state.count - 1 }
    case 'write': return { ...state, text: action.payload }
    case 'soma': return { ...state, one: state.one + 5, two: state.two + 10, }
    case 'random': return { ...state, random: Math.floor(Math.random() * 25) + 1, }
    default: throw new Error('cu');

  }
}

const App = () => {
  const [{ count, text, one, two, random }, dispatch] = useReducer(reducer, initialState);
  const three = one + two;


  return (
    <div>
      <div style={{ backgroundColor: 'green', padding: '20px' }}>
        <h4>testando soma</h4>
        <h1>{count}</h1>
        <button className='btn' onClick={() => { dispatch({ type: 'add' }) }}>Add</button>
        <button className='btn' onClick={() => { dispatch({ type: 'sub' }) }}>Sub</button>
      </div>

      <br />
      <br />

      <div style={{ backgroundColor: 'red', padding: '20px' }}>
        <h4>testando inputs value</h4>
        <h1>{text}</h1>
        <input type="text" value={text} onChange={(e) => { dispatch({ type: 'write', payload: e.target.value }) }} />
      </div>

      <br />
      <br />

      <div style={{ backgroundColor: 'purple', padding: '20px' }}>
        <h4>testando derived state</h4>
        <h2>one: {one}</h2>
        <h2>two: {two}</h2>
        <h2>total: {three}</h2>
        <button className="btn" onClick={() => { dispatch({ type: 'soma' }) }}>plus</button>
      </div>

      <br />
      <br />

      <div style={{ backgroundColor: 'chocolate', padding: '20px' }}>
        <h4>testando numero aleatorio</h4>
        <h2>numero aleatório: {random}</h2>
        <button className="btn" onClick={() => { dispatch({ type: 'random' }) }}>roll</button>
      </div>

      <br />
      <br />

      <div style={{ backgroundColor: 'gray', padding: '20px' }}>
        <h4>testando multiplos inputs</h4>
        <button className="btn" onClick={() => { dispatch({ type: 'random' }) }}>roll</button>
      </div>
    </div>
  )
}

export default App