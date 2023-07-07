const StatisticLine = ({ text, value, total }) => {
    if (total > 0) {
        return (
            <>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                {text}
                            </td>
                            <td>
                                {value}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </>
        )
    }
}

export default StatisticLine;