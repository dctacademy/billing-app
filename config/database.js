const mongoose = require('mongoose')
const CONNECTION_URI = process.env.MONGODB_URI || `mongodb://localhost:27017/billing-app` 
const configureDB = () => {
    mongoose.connect(CONNECTION_URI, {       
            useNewUrlParser: true, 
            useUnifiedTopology: true, 
            useCreateIndex: true
    })
    .then(() => {
        console.log('connected to db')
    })
    .catch((err) => {
        console.log(err)
    })
}

module.exports = configureDB