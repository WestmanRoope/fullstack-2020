import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = () =>(
  <h1>Feedback</h1>
)

const Header2 = () =>(
  <h2>Statistics</h2>
)

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button> )

// const Average = (props) => {
//   const average = ((props.good + (props.bad * -1)) / props.all)
//   return (<p>Average: {average}</p>)
// }

// const Positive = (props) => {
//   const positive = ((props.good / props.all)*100)
//   return(
//     <p>Positive: {positive} %</p>
//   )
// }

const Statistics = (props) => {
  if (props.all !== 0){ 
  return (
  <table>
    <tbody>
    <StatisticsLine text="Good" value={props.good}/>
    <StatisticsLine text="Neutral" value={props.neutral}/>
    <StatisticsLine text="Bad" value={props.bad}/>
    <StatisticsLine text="Average" value={props.average}/>
    <StatisticsLine text="Positive" value={props.positive}/>
    </tbody>
  </table>)
  } else
  return (<p>No feedback given</p>)
}

const StatisticsLine = (props) => (
  <tr><td>{props.text}:</td><td>{props.value}</td></tr>
)

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const positive = ((good / all)*100) + "%"
  const average = ((good + (bad * -1)) / all)
  const IncGood = () => {
    setGood(good + 1)
    setAll(all + 1)}

  const IncNeutral = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)}

  const IncBad = () => {
    setBad(bad + 1)
    setAll(all + 1)}

  return (
    <div>
      <Header/>
      <Button handleClick={() => IncGood()} text="Good"/>
      <Button handleClick={() => IncNeutral()} text="Neutral"/>
      <Button handleClick={() => IncBad()} text="Bad"/>
        <div>
          <Header2/>
          <Statistics good={good} neutral={neutral} bad={bad}
           all={all} positive={positive} average={average}/>
      </div>      
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)