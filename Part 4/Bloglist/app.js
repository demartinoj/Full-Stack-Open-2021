//Main app component which specifies the main connection to mongoose backend as well as specifying which middleware and routing to use 

// === REQUIREMENTS === //
    require('dotenv').config()
    const config = require('./utils/config')
    const express = require('express')
    const app = express()
    const cors = require('cors')
    const blogRouter = require('./controllers/blogRouter')
    const middleware = require('./utils/middleware')
    const logger = require('./utils/logger')
    const mongoose = require('mongoose')


//logger print to console
    logger.info('connecting to', config.MONGODB_URI)

//mongoose connection
    mongoose.connect(config.MONGODB_URI)
        .then(() => {
            logger.info('connected to MongoDB')
        })
        .catch((error) => {
            logger.error('error connecting to MongoDB:', error.message)
        })

// === APP.use DECLARATIONS === // 
    app.use(cors())
    app.use(express.static('build'))
    app.use(express.json())
    app.use(middleware.requestLogger)

    app.use(blogRouter)

    app.use(middleware.unknownEndpoint)
    app.use(middleware.errorHandler)

    module.exports = app
