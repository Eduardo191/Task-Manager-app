require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5e617577d3a42d43f4f61cca').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('5e615ae71466120fb051c80f').then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})

