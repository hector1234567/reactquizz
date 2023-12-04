import FinishButton from "./FinishButton";
import NextButton from "./NextButton";
import Options from "./Options";
import Progress from "./Progress";
import Timer from "./Timer";

function Question({question, dispatch, answer, questionIndex, numQuestions, points, maxPoints, secondsRemaining}) {
    return (
        <div>
            <Progress questionIndex={questionIndex} numQuestions={numQuestions} points={points} maxPoints={maxPoints}/>
            <h4>{question.question}</h4>
            <Options question={question} dispatch={dispatch} answer={answer}/>
            <div>
                <Timer dispatch={dispatch} secondsRemaining={secondsRemaining}/>
                {answer !== null && questionIndex < numQuestions - 1 && <NextButton dispatch={dispatch}/>}
                {answer !== null && questionIndex === numQuestions - 1 && <FinishButton dispatch={dispatch}/>}
            </div>
        </div>
    )
}

export default Question;
