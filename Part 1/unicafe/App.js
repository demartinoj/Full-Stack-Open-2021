import React, { useState } from 'react'
/////////////////////////////////////////////////////////////////////////////
//   BUTTON COMPONENT   //
const Button = (props) => {
  return (
  <button onClick = {props.onClick}>
    {props.text}
  </button> 
  )
}

 //   STATISTICS COMPONENT   //
 const Statistics = (props) => {
  //variable definitions
  const total = props.good + props.bad + props.neutral
  const average = ((props.good*1)+(props.bad*-1))/total
  const pPositive = (props.good/total)*100
  
    //   STATISTIC LINE COMPONENT   //
    const StatisticLine = (props) => {
      if (props.text === 'Average'){
        return(
          props.text, ':', average
        )
      }
      if(props.text === 'Total'){
        return(
          props.text, ':', total
        )
      }
      if(props.text === 'pPositive'){
        return(
          props.text, ':', pPositive
        )
      }
    }

  // Checksum for initial state
        if (total === 0){
          return(
            <div>
              No Feedback Provided
            </div>
          )
        }
      // Execution after total > 1
        return (
          <table>
          <tbody>
                <tr><td>Good: {props.good}</td></tr>
                <tr><td>Neutral: {props.neutral}</td></tr>
                <tr><td>Bad: {props.bad}</td></tr>
                <tr><td>All: {<StatisticLine text='Total'/>}</td></tr>
                <tr><td>Average: {<StatisticLine text='Average'/>}</td></tr>
                <tr><td>Percent Positive: {<StatisticLine text='pPositive'/>}%</td></tr>
          </tbody>
          </table>
        
        )
}

///////////////////////////////////////////////////////////
//    APP COMPONENT //

const App = () => {
  //save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  let statReturn = <Statistics good={good} neutral={neutral} bad={bad} /> 
  //Core Functionality of Buttons at Init
  return(
    <div>
      <h1> Give Feedback: </h1>
     
          <Button  
            onClick={() => setGood(good+1)}
            text='Good'
          />

          <Button
            onClick = {() => setNeutral(neutral+1)}
            text='Neutral'
          />

          <Button
            onClick = {() => setBad(bad+1)}
            text='Bad'
          />
          
          <h2>Statistics:</h2>
          {statReturn}
          
    </div>
  )

}

export default App