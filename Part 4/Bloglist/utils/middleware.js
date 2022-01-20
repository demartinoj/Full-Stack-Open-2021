//This file defines the middleware being utilized throughout the rest of the app. 

// === REQUIREMENTS === // 
const logger = require('./logger')

// === FUNCTION DECLARATIOINS === //

    //request logger function utilizing the logger utility located in the same directory. Logs indvidual lines to the console shell based off of the request received from front end. 
    const requestLogger = (request, response, next) => {
        logger.info('Method:', request.method)
        logger.info('Path:  ', request.path)
        logger.info('Body:  ', request.body)
        logger.info('---')
        next()
    }

    //unknown endpoint function utilizing the logger utility located in the same directory. 
    const unknownEndpoint = (request, response) => {
        response.status(404).send({error: 'unknown endpoint'})
    }

    //error handler function utilizing the logger utility located in the same directory. Logs information about the error based on 'Cast Error' or 'Validation error' before pushing error to next 
    //middleware function. 

    const errorHandler = (error, request, response, next) => {
        logger.error(error.message)

        if (error.name === 'CastError') {
            return response.status(400).send({error: 'malformatted id'})
        } else if (error.name === 'ValidationError') {
            return response.status(400).json({error: error.message})
        }
        next(error) 
    }

module.exports = {
    requestLogger, 
    unknownEndpoint, 
    errorHandler
}