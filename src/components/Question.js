import NextButton from "./NextButton";
import Options from "./Options";
import Progress from "./Progress";

function Question({question, dispatch, answer, questionIndex, numQuestions, points, maxPoints}) {
    return (
        <div>
            <Progress questionIndex={questionIndex} numQuestions={numQuestions} points={points} maxPoints={maxPoints}/>
            <h4>{question.question}</h4>
            <Options question={question} dispatch={dispatch} answer={answer}/>
            {answer !== null && <NextButton dispatch={dispatch}/>}
        </div>
    )
}

export default Question;
