const Button = ({ handleClickBad, handleClickGood, handleClickNeutral, handleQuoteButtonClick }) => {
    return (
        <>
            <button onClick={handleClickGood}>good</button>
            <button onClick={handleClickNeutral}>neutral</button>
            <button onClick={handleClickBad}>bad</button>
        </>
    )
}

export default Button;