function Options({question, dispatch, answer}) {
    return (
        <div className="options">
            {question.options.map((option, index) => <button className={`btn btn-option ${
                answer !== null ?
                    question.correctOption === index ?
                    'correct'
                    : 'wrong'
                : '' } ${answer === index ? 'answer' : ''}`} 
            key={option} 
            onClick={() => dispatch({
                type: 'newAnswer',
                payload: index
            })}
            disabled={answer !== null}
            >{option}</button>)}
        </div>
    )
}

export default Options;
