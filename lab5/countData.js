const fs = require('fs')

fs.readFile('demo.txt', 'utf-8', (err, data) => {
    if(err){
        throw err.message
    }
    let getData = data.toString().split(" ")
    console.log(getData)
    console.log(getData.length)
})