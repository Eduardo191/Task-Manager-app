require('../src/db/mongoose')
const User = require('../src/models/user')

User.findByIdAndUpdate('5e6164b0629a2721d40beb0d', { age: 1 }).then((user) => {
    console.log(user)
    return User.countDocuments({ age: 1 })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})
