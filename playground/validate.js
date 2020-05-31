const validator = require('validator')
const isEmail = require('validator/lib/isEmail')

console.log(validator.isEmail('anidctacademycom'))
console.log(isEmail('ani@dctacademy.com'))