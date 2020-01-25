const express = require('express')

const app = express()

const PORT = process.env.PORT || 3000

app.get('/', (req, res)=>{
    res.send('<h3>Hello world</h3><p>Hello All</p>')
})

app.listen(PORT, () =>{
    console.log(`server is Running on PORT ${PORT}`)
})
