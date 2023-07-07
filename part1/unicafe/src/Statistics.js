const Statistics = ({ good, neutral, bad, total }) => {
    if (total > 0) {
        return (
            <>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                all
                            </td>
                            <td>
                                {total}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                average
                            </td>
                            <td>
                                {total / 3}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                positive
                            </td>
                            <td>
                                {(good / total) * 100}%
                            </td>
                        </tr>
                    </tbody>
                </table>

            </>
        )
    } else {
        return (
            <>
                <p>No feedback given</p>
            </>
        )
    }
}

export default Statistics;