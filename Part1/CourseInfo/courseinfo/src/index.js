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

  const Content = () => {
    return (
      <>
      <p>{part1}: {exercises1}</p>
      <p>{part2}: {exercises2}</p>
      <p>{part3}: {exercises3}</p>
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
    const course = 'Half Stack application development'
    const part1 = {
      name: 'Fundamentals of React',
      exercises: 10
    }
    const part2 = {
      name: 'Using props to pass data',
      exercises: 7
    }
    const part3 = {
      name: 'State of a component',
      exercises: 14
    }
  return (
    <>
      <Header course={coursename}/>
      <Content />
      <Total total={totalexcerices}/>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))