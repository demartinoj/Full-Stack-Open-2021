import React, { useState, useEffect} from 'react'
import './App.css'
import Results  from './components/SearchResults'
import Forms from './components/Forms'
import axios from 'axios'
import personsService from './services/persons'

const App = () => {
  

/// STATE DECLARATIONS ///
  
  const [ persons, setPersons ] = useState([]) 
  const [ newPerson, setNewPerson ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');
  const [ query, setQuery ] = useState('');
  const [ addBanner, setAddBanner] = useState()  

  
  //Array of names consisting of the name attributes for all contact objects in [persons] rempaped into variable namesArray
  const namesArray = persons.map((element) => element.name.toLowerCase())
  const numArray = persons.map((element) => element.number)

  const Banner = ({message}) => {
    if(message === null){
      return null
    }
    return(
      <div className="Banner">
        {message}
      </div>
    )
  }
  

/// FUNCTION DEFINITIONS ///

  //This function creates a {contactObject} with attributes id, name, and num. From there, it checks to see if the name attribute is already entered into the contact list. 
  //If not, it adds the contactObject to the list [persons] and resets the fields. 
  const addContact = (event) => {
    event.preventDefault()
    const contactObject = {
      name: newPerson,
      number: newNumber
    }

      //Check to see if name to be added is already included in the list of contact names. 
      let dupeStatus = namesArray.includes(contactObject.name.toLowerCase())
      let dupeNum = numArray.includes(contactObject.number)

      const updateContact = id => {
        console.log(id)
        const updateContactObject = persons.find(n => n.id === id)
        const url = `http://localhost:3001/api/persons/${id}`
        const changedContact = {...updateContactObject, number: newNumber}
        axios.put(url, changedContact).then(response => {
          setPersons(persons.map((contact) => contact.id !== id ? contact: response.data))
        })
        
      }
      
      if (dupeStatus === true && dupeNum === false){
        window.confirm(`"${contactObject.name}" is already included in this phonebook, update existing entry with new number?`) //string literals use ` not '
        let specificId = persons.find(n => n.name === contactObject.name)
        console.log('specificId:', specificId)
        updateContact(specificId.id)
        setNewPerson('')
        setNewNumber('')

      } else if (dupeStatus === true && dupeNum === true){
        window.confirm(`"${contactObject.name}" is already included in this phonebook`) //string literals use ` not '
        setNewPerson('')
        setNewNumber('')
        
      } else{
        personsService
          .create(contactObject)
          .then(setAddBanner('Contact has been added successfully!'))
          .then(setTimeout(() => {
            setAddBanner('')}, 3000
         ) )
        setPersons(persons.concat(contactObject))
        setNewPerson('')
        setNewNumber('')
      }

  }



  //Contact List Render, uses the getAll() method of personsService module. UseEffect is also implemented to prevent logic crash on init render. 
    useEffect(() => {
      personsService
        .getAll()
        .then(response => {setPersons(response.data)})
        console.log(persons)
    }, [])
    
/// EVENT HANDLERS ///
  const handlePersonChange = (event) => {
    setNewPerson(event.target.value)
  }
 
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleQuery = (event) => {
    let query = event.target.value
    setQuery(query)
  }

      
/// RETURN RENDERING ///
  return(<div>
    <h1> Phonebook </h1>
      <Banner message={addBanner}/>
      <Forms 
        query = {query}
        handleQuery = {handleQuery}
        addContact = {addContact}
        handlePersonChange = {handlePersonChange}
        newNumber = {newNumber}
        handleNumberChange = {handleNumberChange}
      /> 

      <h4>Contact List</h4>
      <Results array={persons} query = {query} persons={persons}/>

      

  </div>)
  }
export default App

