const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const contactRoute = require('./api/routes/contact')

const app = express()

app.use(morgan('dev'))

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const PORT = process.env.PORT || 3000

app.use('/api/contacts', contactRoute)

app.get('/', (req, res)=>{
    res.send('<h3>Hello world</h3><p>Hello All</p>')
})

app.listen(PORT, () =>{
    console.log(`server is Running on PORT ${PORT}`)
})

