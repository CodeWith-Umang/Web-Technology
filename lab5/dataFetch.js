const fs = require('fs')

fs.readFile('fetchdata.txt', 'utf-8', (err, data) => {
    if(err){
        throw err.message
    }
    let getData = data.toString().split("\n")
    console.log(getData)
})
