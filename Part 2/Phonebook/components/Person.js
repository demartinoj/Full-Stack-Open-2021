import React from 'react'
import DeleteContact from './DeleteContact'

//Creates Person in the form of list elements

const Person = (props) => {
    return(
        <li>{props.name} - {props.number} <button onClick={(e)=> {DeleteContact(e, props.id, props.personsArr)}}>Delete Contact</button></li>
    )
}

export default Person