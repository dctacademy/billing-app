const jwt = require('jsonwebtoken')

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6InN0ZXZlIiwiaWF0IjoxNTg5NTk0OTc1LCJleHAiOjE1ODk1OTQ5NzV9.QYvUnf4l1-yTf07ZAL8m67tghONCgIL--JnKWHYjI3E'

// const data = jwt.verify(token, 'dct123')
// console.log(data)

let data 
try {
    data = jwt.verify(token, 'dct123')
    console.log(data)
} catch(e) {
    console.log(e.message)
}

