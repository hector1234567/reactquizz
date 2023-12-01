import { useEffect, useReducer } from "react";
import Header from "./Header";

const initialState = {
  questions: [],
  status: 'loading'
  //loading, error, ready, active, finished
}

function reducer(state, action) {
  switch(action.type) {
    case 'loadQuestions': 
      return {...state, questions: action.payload, status: 'ready'}
    case 'dataFailed': 
      return {...state, status: 'error'}
    default:
      throw new Error('Unknown action type');
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(function() {
    fetch(`http://localhost:8000/questions`)
    .then(res => res.json())
    .then(data => 
      dispatch({
        type: 'loadQuestions',
        payload: data
      })
    )
    .catch(err => dispatch({type: 'dataFailed'}))
  }, []);
  return (
    <Header/>
  );
}

export default App;
