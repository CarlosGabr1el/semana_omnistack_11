const express = require('express')
const Route = require('./routes')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json(), Route)

app.listen(3333)