const fs = require('fs')

fs.readFile('demo.txt', 'utf-8', (err, data) => {
    if(err){
        throw err.message
    }
    let countVowel = data.toString().toLowerCase().match(/[aeiou]/g)
    console.log("Total Vowel in File: ", countVowel.length)
})