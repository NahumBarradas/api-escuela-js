const mongoose = require('mongoose')
const password = ('./password.js')

const connectionString = `mongodb+srv://nahum:${password}@cluster0.lm1z9kt.mongodb.net/?retryWrites=true&w=majority`

//Conexión a mongodb
mongoose.connect(connectionString)
    .then(() => {
        console.log('Database connected')
    }).catch(err => {
        console.error(err)
    })