const fs = require('fs')

fs.readFile('Student_Details.txt', 'utf-8', (err, data) => {
    if(err){
        throw err.message
    }
    let getdata = data.toString().split("\n")
    console.log(getdata)
})