const express = require('express')
const cors = require('cors')
const app = express()
const configureDB = require('./config/database')
configureDB()
const routes = require('./config/routes')
const port = 3050

app.use(express.json())
app.use(cors())
app.use('/', routes)

app.listen(port, () => {
    console.log('listening on port', port)
})