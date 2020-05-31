const jwt = require('jsonwebtoken')

const data = {
    id: 1, 
    name: 'steve'
}

const token = jwt.sign(data, 'dct123', { expiresIn: '10' })
console.log(token)