import { useEffect } from "react";

function Timer({dispatch, secondsRemaining}) {
    useEffect(function() {
        const id = setInterval(function() {
            dispatch({type: 'tick'})
        }, 1000);
        return () => clearTimer(id)
    }, [dispatch])

    function clearTimer(id) {
        clearInterval(id);
    }

    return (
        <div className="timer">{secondsRemaining}</div>
    )
}

export default Timer;