const { nanoid } = require('nanoid')

function getId() {
    return nanoid().slice(0, 5)
}

const find = () => {
    return Promise.resolve(users)
}

const initializeUsers = () => ([
    { id: getId(), username: 'bryce', password: '12345' },
    { id: getId(), username: 'slade', password: '54321' },
])

let users = initializeUsers()

const insert = ({ username, password }) => {
    const newUser = { id: getId(), username, password }
    users.push(newUser)
    return Promise.resolve(newUser)
}

  module.exports = { insert, find } 