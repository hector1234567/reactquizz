import NextButton from "./NextButton";
import Options from "./Options";

function Question({question, dispatch, answer}) {
    return (
        <div>
            <h4>{question.question}</h4>
            <Options question={question} dispatch={dispatch} answer={answer}/>
            {answer !== null && <NextButton dispatch={dispatch}/>}
        </div>
    )
}

export default Question;
