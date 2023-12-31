import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import FinishScreen from "./FinishScreen";

const SECONDS_INIT = 100;

const initialState = {
  questions: [],
  status: 'loading',
  questionIndex: 0,
  answer: null,
  points: 0,
  secondsRemaining: SECONDS_INIT
}

function reducer(state, action) {
  switch(action.type) {
    case 'dataReceived': 
      return {...state, questions: action.payload, status: 'ready'}
    case 'start': 
      return {...state, status: 'active'}
    case 'dataFailed': 
      return {...state, status: 'error'}
    case 'newAnswer':
      const question = state.questions.at(state.questionIndex);
      return {...state, 
        answer: action.payload,
        points: action.payload === question.correctOption ? 
          state.points + question.points : state.points
      }
    case 'nextQuestion': 
      return {...state, questionIndex: state.questionIndex + 1, answer: null}
    case 'finish': 
      return {...state, status: 'finished'}
    case 'restart': 
      return {...initialState, status: 'active', questions: state.questions}
    case 'tick':
      if(state.secondsRemaining <= 0) {
        return {...state, status: 'finished'}
      }
      return {...state, 
        secondsRemaining: state.secondsRemaining - 1}
    default:
      throw new Error('Unknown action type');
  }
}

function App() {
  const [{questions, status, questionIndex, answer, points, secondsRemaining}, dispatch] = useReducer(reducer, initialState);

  const numQuestions = questions.length;
  const maxPoints = questions.reduce((acc, question) => acc + question.points, 0);

  useEffect(function() {
    fetch(`http://localhost:8000/questions`)
    .then(res => res.json())
    .then(data => 
      dispatch({
        type: 'dataReceived',
        payload: data
      })
    )
    .catch(err => dispatch({type: 'dataFailed'}))
  }, []);

  return (
    <div className="app">
      <Header/>
      <Main>
        {status === 'loading' && <Loader/>}
        {status === 'error' && <Error/>}
        {status === 'ready' && <StartScreen numQuestions={numQuestions} dispatch={dispatch}/>}
        {status === 'active' && <Question question={questions[questionIndex]} dispatch={dispatch} answer={answer} 
          questionIndex={questionIndex} numQuestions={numQuestions}
          points={points} maxPoints={maxPoints} secondsRemaining={secondsRemaining}/>}
        {status === 'finished' && <FinishScreen points={points} maxPoints={maxPoints} dispatch={dispatch}/>}
      </Main>
    </div>
  );
}

export default App;
