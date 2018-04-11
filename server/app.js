const express = require('express')
const bodyParser = require('body-parser')
const route = require('./index.js')
const app = express()
app.set('port', (process.env.port || 3090))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
// app.use(route)
route(app)

    
app.listen(app.get('port'), function () {
    console.log('GetData http://localhost:' + app.get('port'))
})
