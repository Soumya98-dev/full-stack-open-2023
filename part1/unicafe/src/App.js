import { useState } from "react";
import Statistics from "./Statistics";
import Button from "./Button";
import StatisticLine from "./StatisiticLine";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const handleClickGood = () => {
    setGood(good + 1);
    setTotal(total + 1);
  }

  const handleClickNeutral = () => {
    setNeutral(neutral + 1);
    setTotal(total + 1);
  }

  const handleClickBad = () => {
    setBad(bad + 1);
    setTotal(total + 1);
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClickBad={handleClickBad} handleClickNeutral={handleClickNeutral} handleClickGood={handleClickGood} />
      <h1>Statistics</h1>
      <StatisticLine text="good" value={good} total={total} />
      <StatisticLine text="bad" value={bad} total={total} />
      <StatisticLine text="neutral" value={neutral} total={total} />
      <Statistics bad={bad} good={good} neutral={neutral} total={total} />
    </div>
  );
};

export default App;
