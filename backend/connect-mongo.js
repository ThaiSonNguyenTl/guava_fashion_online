const mongoose = require('mongoose')
const DB_NAME = 'GUAVA_FASHION'
const connectionString = `mongodb://localhost:27017/${DB_NAME}`

mongoose.connect(
    connectionString,
    {
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err) => {
        if (err) {
            console.log('Can not connection to MongoDB')
        } else {
            console.log('Connected to MongoDB')
        }
    }
)