import { useState } from 'react';

const App = () => {

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Uint8Array(anecdotes.length));

  const handleQuoteButtonClick = () => {
    const random = Math.floor(Math.random() * anecdotes.length);
    setSelected(random);
    // console.log(random);
  }

  const handleVoteButtonClick = () => {
    const copy = [...votes];
    copy[selected]++;
    setVotes(copy);
    // console.log(copy);
  }

  const anecdoteMostVotes = () => {
    let highest = votes[0];
    let highestVal = 0;
    for (let i = 0; i < votes.length; i++) {
      if (votes[i] > highest) {
        highestVal = i;
        highest = votes[i];
      }
    }
    return highestVal;
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={handleVoteButtonClick}>vote</button>
      <button onClick={handleQuoteButtonClick}>next anecdote</button>
      <h1>Anecdote with the most votes</h1>
      <p>{anecdotes[anecdoteMostVotes()]}</p>
      <p>has {votes[anecdoteMostVotes()]} votes</p>
    </div>
  )
}

export default App;
