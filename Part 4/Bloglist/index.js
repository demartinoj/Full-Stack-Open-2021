// This application was created by Joe DeMartino for Full Stack Open 2021 course. 
// The application will serve as a backend for a blog website

// === REQUIREMENTS === // 
    const express = require('express')
    require('dotenv').config()
    const cors = require('cors')

    const app = require('./app')
    const http = require('http')
    const config = require('./utils/config')
    const logger = require('./utils/logger')

// === APP.USE STATEMENTS === //
    app.use(cors())
    app.use(express.json())

// === COMPONENT APPLICATION STATEMENTS === // 
    const server = http.createServer(app) 
    const PORT = process.env.PORT || 3003
    server.listen(config.PORT, () => {
        logger.info(`Server running on port ${PORT}`)
    })
