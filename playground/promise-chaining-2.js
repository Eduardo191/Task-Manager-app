require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('5e617577d3a42d43f4f61cca').then((task) => {
    console.log(task)
    return Task.countDocuments({ completed: false })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})