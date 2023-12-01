function StartScreen({numQuestions, dispatch}) {
    function handleStart() {
        dispatch({type: 'start'})
    }

    return (
        <div className="start">
            <h2>Welcome to The React quiz!</h2>
            <h3>{numQuestions} questions to test your React mastery</h3>
            <button className="btn btn-ui" onClick={handleStart}>Lets start</button>
        </div>
    )
}

export default StartScreen;
