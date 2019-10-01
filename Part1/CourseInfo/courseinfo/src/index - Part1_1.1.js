import React from 'react'
import ReactDOM from 'react-dom'

const coursename = 'Half Stack application development'
const part1 = 'Fundamentals of React'
const exercises1 = 10
const part2 = 'Using props to pass data'
const exercises2 = 7
const part3 = 'State of a component'
const exercises3 = 14
const totalexcerices=exercises1+exercises2+exercises3;

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
      <p>{props.partname}: {props.exercisesno}</p>
      </>
    )
  }

  const Total = (props) => {
    return (
        <>
      Number of exercises: {props.total}
      </>
    )
  }


const App = () => {
  return (
    <>
      <Header course={coursename}/>
      <Content partname={part1} exercisesno={exercises1} />
      <Content partname={part2} exercisesno={exercises2} />
      <Content partname={part3} exercisesno={exercises3} />
      <Total total={totalexcerices}/>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))