const express = require('express')
const Route = require('./routes')
const cors = require('cors')
const app = express()
const { errors } = require('celebrate')


app.use(cors())
app.use(express.json(), Route)
app.use(errors())

module.exports = app