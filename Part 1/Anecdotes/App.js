import React, { useState } from 'react'

//Create global button component
const Button = (props) => {
  return (
    <button onClick = {props.onClick}>
      {props.text}
    </button> 
    )
}

const App = () => {
  //Starting anecdotes index (Provided)
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  /// VARIABLES /// 
  const startVotes = Array(anecdotes.length).fill(0)

  /// USE STATES /// 
  const [anec, setAnec] = useState(0)
  //NOTE FOR REFERENCE: store the array with multiple indices as one variable in this case vote. 
  const [vote, setVote] = useState(startVotes)

  


  /// FUNCTIONS /// 

  //Function to generate random number to be used as index for current render. 
  const randIndex = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max-min) + min);
  }
  
  //Function to verify that the random number generated from randIndex function is not the same as 
  //the current index. 
  const verifyRandIndex = () => {
    let randNum = randIndex(0, anecdotes.length)
    while (randNum === anec){
      randNum = randIndex(0, anecdotes.length)
    }
    setAnec(randNum)
  }

  //Function to be called to update the vote count in copy of original array.
  const changeVote = () => {
    let newVote = [...vote]
    newVote[anec]+=1
    setVote(newVote)
  }

  // Declare mostVotes variable with max function from Math lib. 
  let mostVotes = vote.indexOf(Math.max(...vote))
 

  /// TESTSING SPACE ///
  // let test = changeVote
  // console.log(test)
  // console.log(startVotes)
  // console.log(mostVotes)

  ///RETURN RENDERS
  return (
    <div>
      <h1> Anecdotes: </h1>

      <h3>{anecdotes[anec]}</h3>

      <Button 
        onClick = {verifyRandIndex}
        text = 'Next Anecdote'
      />
    
      <Button 
        onClick = {changeVote}
        text = 'Vote for this Anecdote!'
      />

      <p>This Anecdote has {vote[anec]} votes.</p>

       <h3>Anecdote with the most votes:</h3>
       <p>"{anecdotes[mostVotes]}"</p>
    </div>
  )
  
}

export default App