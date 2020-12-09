import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = () => (
  <h1>Anecdote of the day</h1>
)

const Header2 = () => (
  <h2>Anecdote with most votes</h2>
)

const MostVotes = (props) => {
  if (props.vote.reduce((a, b) => a + b) !== 0) {
  return (
    <p>
      {anecdotes[props.vote.indexOf(Math.max(...props.vote))]} <br />
       has {(Math.max.apply(null,props.vote))} vote/s
    </p>
  )} else {
    return (<p>No votes yet</p>)
  }
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button> )

function getRandomInt(array) {
  return (Math.floor(Math.random() * Math.floor(array.length)))
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(new Array(props.anecdotes.length).fill(0))

  
  const selectAnecdote = () => {
    setSelected(getRandomInt(props.anecdotes))
    }

  const voteAnecdote = () => {
    const copy = [...vote] 
    copy[selected] += 1
    setVote(copy)
  }

  return (
    <div>
      <Header />
      {props.anecdotes[selected]}<br />
      <Button handleClick={() => selectAnecdote()} text="Next anecdote"/>
      <Button handleClick={() => voteAnecdote()} text="Vote"/>
      <Header2 />
      <MostVotes vote={vote} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)