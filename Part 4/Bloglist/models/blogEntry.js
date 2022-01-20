//This file serves as the main mongodb schema definition and object attribute alteration for the backend database

// === REQUIREMENTS === //
const mongoose = require('mongoose')


// === SCHEMA DEFINITION === //
    const blogSchema = new mongoose.Schema({
        title: String,
        author: String,
        url: String,
        likes: Number
        })

    blogSchema.set('toJSON', {
        transform: (document, returnedObject) => {
            returnedObject.id = returnedObject._id.toString()
            delete returnedObject._id
            delete returnedObject.__v
        }
    })

module.exports = mongoose.model('Blog', blogSchema)