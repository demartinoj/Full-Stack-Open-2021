//Local config file intentionally added to .gitignore

// === REQUIREMENTS === //
require('dotenv').config()

// === LOCAL VAR DEFINITIONS === //
    const PORT = process.env.PORT
    const MONGODB_URI = process.env.MONGODB_URI

module.exports = {
    MONGODB_URI, PORT
}