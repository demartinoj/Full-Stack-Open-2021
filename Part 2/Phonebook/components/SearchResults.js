import React from 'react'
import Person from './Person.js'

//Results function handles the initial query, as well as return the result of FilteredResults which is a list of Person objects matching the query from user input
const Results = ( props ) =>{
    
    let rArray = props.array
    let rQuery = props.query.toLowerCase()
    let personsArr = props.persons
    return(
        <div>
            <FilteredResults 
            persons = {rArray} 
            query = {rQuery}
            personsArr = {personsArr}/>
        </div>
    )}
    

//FilteredResults component takes the search query from user input and filters out the list of persons containing the same query match before returning all results. 
const FilteredResults = (props) => {
    if(props.persons !== undefined){
        let lowercaseArray = props.persons.map((contact) => contact.name.toLowerCase())

        //searchResults returns an array from the global list which meets the search criteria stored in query state variable
        const searchResults = props.persons.filter((contact) => {
            return(contact.name.toLowerCase().includes(props.query))
        })
        
        
        return(
            <div>
                <ul>
                    {searchResults.map((contact) => 
                        <Person key = {contact.id} name = {contact.name} number = {contact.number} id={contact.id} personsArr={props.personsArr}/>)}
                        
                </ul>
            </div>
        )
    } else {
        return null
    }
} 





export default Results