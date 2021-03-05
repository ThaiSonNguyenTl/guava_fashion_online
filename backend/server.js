require('./connect-mongo')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('./routes')
const app = express()
const port = 9000;

app.use(bodyParser.json())
app.use(cors({
    origin: 'http://localhost:3000',
    credentials:true
}))
app.use(routes)
app.use((err, req, res, next) => {
    let message = err.message
    let stack = err.stack
    res.status(400).json({message,stack})
})

app.listen(port, (err) => console.log(err|| 'Server opened at port:'+ port))