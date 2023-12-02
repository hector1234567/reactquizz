function Progress({questionIndex, numQuestions, points, maxPoints}) {
    return (
        <div className="progress">
            <progress value={questionIndex/numQuestions}/>
            <p>Question <b>{questionIndex}</b> / {numQuestions}</p>
            <p><b>{points}</b> / {maxPoints} points</p>
        </div>
    )
}

export default Progress;
