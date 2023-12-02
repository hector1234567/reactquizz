function FinishButton({dispatch}) {
    return (
        <div>
            <button className="btn btn-ui" onClick={() => dispatch({type: 'finish'})}>Finish</button>
        </div>
    )
}

export default FinishButton;