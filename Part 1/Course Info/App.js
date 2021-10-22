import React from 'react'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }
  const total = (course.parts[0].excercises + course.parts[1].excercises + course.parts[2].excercises)

//Header declaration

//Content component renders parts and their number of excercies

//Total compnent renders the total number of excercises
  return(
    <div>
      
      <header>
         <h1>{course.name} </h1>
      </header>
      
    
      <content>
          <p>
            {course.parts[0].name} {course.parts[0].exercises}
          </p>

          <p>
            {course.parts[1].name} {course.parts[1].exercises}
          </p>

          <p>
            {course.parts[2].name} {course.parts[2].exercises}
          </p>
      </content>
    
      <total>
          <p>Number of excercises: {course.total}</p>
      </total>

         
    </div>
  )

}


export default App