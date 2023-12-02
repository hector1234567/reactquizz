import RestartButton from "./RestartButton";

function FinishScreen({points, maxPoints, dispatch}) {
    let emoji = '👌';
    if(points/maxPoints === 1) emoji = '😍';
    if(points/maxPoints < 0.5) emoji = '🤦‍♂️';

    return (
        <>
            <p className="result">You scored <strong>{points}</strong> of {maxPoints} points {emoji}</p>
            <RestartButton dispatch={dispatch}/>
        </>
    )
}

export default FinishScreen;
