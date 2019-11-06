/*App
  Course
    Header
    Content
      Part
      Part
      ...*/
import React from 'react'
import ReactDOM from 'react-dom'
//const Header = ({header, count}) => {
const Header = ({ header }) => {
  console.log("Header:", { header })
  return (
    <div>
      <h1>{header}</h1>
    </div>
  )
}
//<h5>Total of {count} excersises</h5>

const Part = ({ name, exercises }) => {
  console.log("Part:", { name }, { exercises })
  return (
    <div>
      {name} {exercises}
    </div>
  )
}

const total = parts.reduce((s, p) => {
  console.log('what is happening', s, p)
  return someMagicHere
})

const Content = ({ name, exercises }) => {
  console.log("Content:", { name }, { exercises })
  return (
    <div>
      <Part name={name} exercises={exercises} />
    </div>
  )

}

const Course = ({ data }) => {          /*"data" is a var/ prop: can be or any other name. whereas, "Course" is a component*/
  console.log("Course:", { data });
  let countExcersises = 0;
  let string = 'totalof' + countExcersises + 'excersises';
  return (
    <div>
      <Header header={data.name} />

      {data.parts.map((partSelected) => {
        countExcersises = countExcersises + partSelected.exercises;
        return (<div><Content name={partSelected.name} exercises={partSelected.exercises}></Content></div>)
      }
      )

      }
      <Header count={countExcersises} />
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return (
    <div>
      <Course data={course} />
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))