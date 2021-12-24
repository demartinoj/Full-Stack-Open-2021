import React from "react";

// Form Component that populates the forms as well as handle the search and on submit functions. 
const Forms = (props) => {
    
    return(
        <div>
            <h3>Contact List Search Filter</h3>
            <form >
                <input
                placeholder='Filter Results By Name'
                value = {props.query} 
                onChange = {props.handleQuery}
                />
                <br />
            </form>


            <h3>Add New Contact to Phonebook</h3>
            <form onSubmit = {props.addContact}>
                <input 
                placeholder='Enter New Contact Name'
                value = {props.newPerson}
                onChange = {props.handlePersonChange}
                />
                <br />
                <input 
                placeholder = 'Enter Contact Number'
                value = {props.newNumber}
                onChange = {props.handleNumberChange}
                />
                <br />
                <button type="submit"> Save Contact </button>
            </form>
        </div>
    )
}

export default Forms