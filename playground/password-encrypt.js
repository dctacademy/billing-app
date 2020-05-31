const bcryptjs = require('bcryptjs')
const password = 'secret123'

bcryptjs.genSalt()
    .then((salt) => {
        console.log('salt', salt)
        bcryptjs.hash(password, salt)
            .then((encrypted) => {
                console.log('encrypted', encrypted)
            })
    })