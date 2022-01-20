//This file serves as the event logger for the backend database. 

//General purpose information logger
    const info = (...params) => {
        console.log(...params)
    }

//General purpose error logger
    const error = (...params) => {
        console.error(...params)
    }

module.exports = {
    info, error
}