require('dotenv').config()
const express = require('express')

const server = express()

server.get('/api/users', (req, res) =>{
    res.json([
        {id: 1, username: 'nelson'},
        {id: 2, username: 'bryce'},
        {id: 3, username: 'slade'}
    ])
})

server.post("/api/register", (req, res) => {
    const user = req.body
    if (!user.username || !user.password) {
        res.status(400).json({
            message: 'Please provide both username and password'
        })
    }
    else {
        res.status(201).json(user)
    }
})

server.post("/api/login", (req, res) => {

})

const PORT = process.env.PORT || 8080

server.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})