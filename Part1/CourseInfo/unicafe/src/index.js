import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({onclick}, {text}) => (
<button onClick={onclick}>{text}</button>
)

const Statistic = (props) => {
  return(
    <div>
      {props.text}
      {props.value}
    </div>
  )
}

const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad;
  const average = ((props.good * 1) + (props.neutral * 0) + (props.bad * -1)) / (props.good + props.neutral + props.bad);
  const percentage = (props.good / (props.good + props.neutral + props.bad)) * 100;

  if (all === 0) {
    return (
      <div>
        <p>No feedback is given</p>
      </div>
    )
  }

  return (
    <div>
      <h1>Statistics</h1>
      <Statistic text="good" value={props.good}/> <br/>
      <Statistic text="neutral" value={props.neutral}/> <br/>
      <Statistic text="bad" value={props.bad}/> <br/>
      <Statistic text="all" value={all}/> <br/>
      <Statistic text="average" value={average}/> <br/>
      <Statistic text="percentage" value={percentage}/>% <br/>      
    </div>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodclick = () => {
    setGood(good+1)
  }
  const neutralclick = () => {
    setNeutral(neutral+1)
  }
  const badclick = () => {
    setBad(bad+1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onclick={goodclick} text="good"/>
      <Button onclick={neutralclick} text="neutral"/>
      <Button onclick={badclick} text="bad"/>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)