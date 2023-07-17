const Total = ({ parts }) => {
    const total = parts.reduce((sum, order) => {
        return sum + order.exercises
    }, 0)
    return (
        <>
            <h3>total of {total} exercises</h3>
        </>
    )
}

export default Total;