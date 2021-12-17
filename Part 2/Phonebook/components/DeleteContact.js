import personsService from '../services/persons'
import {useEffect, useState} from 'react'



const DeleteContact = (event, id, personsArr) => {
    event.preventDefault()
    alert('are you sure you wish to delete')   
    personsService
        .deleteContact(id)
        .catch(error => alert('The requested contact is not found'))
    personsArr.splice()
  }




export default DeleteContact