import React from 'react'
import './course.css'


/// NOTES ///
// you left off trying to get a list of multiple course objects functioning. Tried doing it in testConstructor function,
// not sure if it will Worker... further trials required. 


/// COMPONENTS /// 

//Course parent component definition. Returns Header as Header component, followed by parts in Content component constructor. 
const Course = ( {course} ) => {
    // console.log('Course object import as is: ', course)
    return(
        <div>
            <Header name={course.name} />
            <Content parts = {course.parts} />
            <TotalConstructor parts = {course.parts} />
        </div>
    )
}

//Header constructor component
const Header = (props) => {return(<h2> {props.name} </h2>)}
    // console.log('props: ', props)
  

//Part Constructor component
const Part = (props) => {return(<p>{props.name} has {props.exercises} exercises. </p>)}
    // console.log('Props from parts; ', props)

//Total component
const Total = (props) => {return(<h4>This course has {props.sum} exercises in total</h4>)}

//Total constructor component
const TotalConstructor = (props) =>
    {   
        const exercisesArray = props.parts.map(number => number.exercises)
        // console.log(exercisesArray[0])
        const reducer = exercisesArray.reduce((previousValue, currentValue) => previousValue + currentValue)
        // console.log(reducer)
        return(<Total sum = {reducer}/>)
    }

//Content Constructor Component - returns a part for each element in parts list. 
const Content = (props) => {
    //  course parts dec'd as par ts.map which returns an individual part component for each element in the props input. 
    const courseParts = props.parts.map((coursePart) => {
        return(<Part name={coursePart.name} exercises={coursePart.exercises} key={coursePart.id}/>)
    })
    // console.log('Course parts: ', courseParts)
    return(courseParts)

} 

//Courses Constructor Component - returns a course for each element in courses array. 
const CoursesConstructor = (props) => 
    {
        const courseArray = props.courses.map((indCourse) => {
            return(<Course course={indCourse}/>)
        })
        return(courseArray)
    }


export default Course
export {CoursesConstructor}