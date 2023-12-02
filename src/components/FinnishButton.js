function FinnishButton({dispatch}) {
    return (
        <div>
            <button className="btn btn-ui" onClick={() => dispatch({type: 'finnish'})}>Finnish</button>
        </div>
    )
}

export default FinnishButton;