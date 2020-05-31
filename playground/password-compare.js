const bcryptjs = require('bcryptjs')

const encrypted = '$2a$10$RqG8EHKcbY1YsKH5RxBh8.kc2/X339a0aNzVyXnmbUfU5nXggXJWy'
const inputPass = 'secret123'

bcryptjs.compare(inputPass, encrypted)
    .then((match) => {
        console.log(match)
    })