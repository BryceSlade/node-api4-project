require('dotenv').config()
const express = require('express')
const User = require('./users/model')

const server = express()

server.get("/api/users", async ( req, res ) => {
    try{
        const users = await User.find()
        res.status(200).json(users)

    } catch(error) {
        res.status(500).json( { message: "The user information could not be retrieved" } )
    }
})

server.post("/api/register", async (req, res) => {
    try {
        const { username, password } = req.body

        if(!username || !password) {
            res.status(400).json( { message: "Please provide username and bio for the user" } )

        } else {
            const user = await User.insert( {username, password } )
            res.status(201).json(user)
        }

    } catch(error) {
        res.status(500).json( { message: "The user with the specified ID does not exist" } )
    }
})

const PORT = process.env.PORT || 8080

server.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})