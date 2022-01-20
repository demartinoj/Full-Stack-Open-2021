import React, { useState, useEffect} from 'react'
import Results  from './components/SearchResults'
import Forms from './components/Forms'
import personsService from './services/persons'

const App = () => {
  

/// STATE DECLARATIONS ///
  
  const [ persons, setPersons ] = useState([]) 
  const [ newPerson, setNewPerson ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');
  const [ query, setQuery ] = useState('');
  const [ addBanner, setAddBanner] = useState('Contact has been added to phonebook successfully!')  
  const [ errorBanner, setErrorBanner ] = useState('An error has occured')

  
  //Array of names consisting of the name attributes for all contact objects in [persons] rempaped into variable namesArray
  const namesArray = persons.map((element) => element.name.toLowerCase())

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
      id: newPerson,
      name: newPerson,
      number: newNumber
    }

      //Check to see if name to be added is already included in the list of contact names. 
      let dupeStatus = namesArray.includes(contactObject.name.toLowerCase())
      if (dupeStatus === true){
        window.confirm(`"${contactObject.name}" is already included in this phonebook`) //string literals use ` not '
        setNewPerson('')
        setNewNumber('')

      } else{
        personsService
          .create(contactObject)
          .then(console.log('contact added successfully'))
          .catch(error => {window.confirm(error.response.data)})
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

