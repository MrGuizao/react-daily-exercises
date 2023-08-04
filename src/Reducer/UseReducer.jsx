import React, { useEffect, useReducer } from 'react'
import Header from './Header';
import Main from './Main';
import Loader from './Loader';
import StartScreen from './StartScreen';
import Error from './Error';
import Question from './Question';


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
      return { ...state, answer: action.payload, 
        points: action.payload === question.correctOption ? state.points + question.points : state.points }
    case 'dataFailed':
      return { ...state, status: 'error' }
    default: throw new Error('Action unknown')
  }
}

const UseReducer = () => {
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

export default UseReducer;