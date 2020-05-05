// PS C:\Users\edu-F\Desktop\node-course> /Users/edu-F/mongodb/bin/mongod.exe --dbpath=/Users/edu-F/mongodb_data
const app = require('./app')
const port = process.env.PORT

app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})


