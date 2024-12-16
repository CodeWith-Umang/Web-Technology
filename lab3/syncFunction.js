const fs = require('fs');

// node.js readFileSync() method
const data = fs.readFileSync('demo.txt', 'utf-8');
console.log("File data: " + data)

// node.js writeFileSync() method
const content = fs.writeFileSync('demo.txt',"This module work Synchronously", 'utf-8')
console.log("File Write Successfully...")

// after write file
console.log("After Write data: " + fs.readFileSync('demo.txt','utf-8'))

// node.js appendaFileSync() method
const str = " This data is append"
const appData = fs.appendFileSync('demo.txt', str)
console.log("Append Data Successfully...")

// after append data
console.log("After Append Data: " + fs.readFileSync('demo.txt','utf-8'))

// programm end message
console.log("Program is end...")