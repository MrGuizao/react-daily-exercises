import React, { useEffect, useReducer } from 'react'
import Header from './Reducer/Header';
import Main from './Reducer/Main';
import Loader from './Reducer/Loader';
import StartScreen from './Reducer/StartScreen';
import Error from './Reducer/Error';
import Question from './Reducer/Question';


const initialState = {
  questions: [],
  status: 'loading',
  index: 0,
  answer: null,
  points: 0,
}

function reducer(state, action) {
  switch (action.type) {
    case 'dataReceived':
      return { ...state, questions: action.payload, status: 'ready' }
    case 'start':
      return { ...state, status: 'active' }
    case 'newAnswer':
      const question = state.questions.at(state.index);
      return { ...state, answer: action.payload, points: action.payload === question.correctOption ? state.points + 1 : state.points }
    case 'dataFailed':
      return { ...state, status: 'error' }
    default: throw new Error('Action unknown')
  }
}

const App = () => {
  const [{ questions, status, index, answer, points }, dispatch] = useReducer(reducer, initialState);
  const numQuestion = questions.length;

  useEffect(() => {
    fetch('http://localhost:8000/questions')
      .then(response => response.json())
      .then(data => dispatch({ type: 'dataReceived', payload: data }))
      .catch(dispatch({ type: 'dataFailed' }))
  }, [])

  return (
    <div className='app'>
      <Header />
      <Main>
        {status === 'loading' && <Loader />}
        {status === 'ready' && <StartScreen numQuestion={numQuestion} dispatch={dispatch} />}
        {status === 'active' && <Question question={questions[index]} dispatch={dispatch} answer={answer} />}
        {status === 'error' && <Error />}
      </Main>
    </div>
  )
}

export default App;