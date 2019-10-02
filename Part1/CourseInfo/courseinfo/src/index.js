import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (
      <>
          <h1>{props.course}</h1>
      </>
    )
  }

  const Content = (props) => {
    return (
      <>
      <p>{props.parts[0].name}: {props.parts[0].exercises}</p>
      <p>{props.parts[1].name}: {props.parts[1].exercises}</p>
      <p>{props.parts[2].name}: {props.parts[2].exercises}</p>
      </>
    )
  }

  const Total = (props) => {
    return (
        <>
      Number of exercises: {props.total[0].exercises+props.total[1].exercises+props.total[2].exercises}
      </>
    )
  }

const App = () => {
    const course = 'Half Stack application development'
    const parts = [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  return (
    <>
      <Header course={course} />
      <Content parts={parts} />
      <Total total={parts} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

