function FinnishScreen({points, maxPoints}) {
    let emoji = '👌';
    if(points/maxPoints === 1) emoji = '😍';
    if(points/maxPoints < 0.5) emoji = '🤦‍♂️';

    return (
        <p className="result">You scored <strong>{points}</strong> of {maxPoints} points {emoji}</p>
    )
}

export default FinnishScreen;
