const express = require('express')
const route = express.Router()

const contacts = []

//Get 
route.get('/',(req,res,next)=>{
    res.status(200).json({
        contacts
    })
})

route.get('/:id',(req,res,next)=>{
    res.json({
        message: 'I am a single Contact'
    })
})

//PUT

route.put('/:id',(req,res,next)=>{
    res.json({
        message: 'I am a Put Route'
    })
})

//DELETE

route.delete('/:id',(req,res,next)=>{
    res.json({
        message: 'I am a Delete Route'
    })
})

//POST
route.post('/',(req,res,next)=>{
    
    contacts.push({
        name: req.body.name,
        email: req.body.email
    })

    res.status(201).json({
        message: 'Data Saved'
    })
})

module.exports = route