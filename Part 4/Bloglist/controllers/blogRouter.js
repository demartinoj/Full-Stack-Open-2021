/* 
This file serves as the main controller for the routing of the different html calls for the backend. 
*/

// === REQUIREMENTS === //
const express = require('express')
const blogRouter = express.Router()
const Blog = require('../models/blogEntry')

// === ROUTES === //
    //Get all blogs
    blogRouter.get('/:blogs', (request, response) => {
      Blog
        .find({})
        .then(blogs => {
          response.json(blogs)
        })
    })

    //Post new blog entry
    blogRouter.post('/:blogs', (request, response) => {
      const blog = new Blog(request.body)

      blog
        .save()
        .then(result => {
          response.status(201).json(result)
        })
    })


module.exports = blogRouter