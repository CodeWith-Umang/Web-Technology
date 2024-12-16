const fs = require("fs");

fs.exists('C:\\Users\\student\\Desktop\\C534\\lab3\\index.txt', (exists)=>{
    console.log(exists?'File Found':'File not found')
})

// // write file method
// fs.writeFile('index.txt',"H", (err)=>{
//     if(err){
//         throw err.message;
//     }
//     console.log("File Written Successfully...")
// })

// // file rename method

// fs.rename('index.txt', 'demo.txt', (err) => {
//     if (err) {
//         throw err.message;
//     }
//     console.log("File Rename Successfully...")
// })

// file append method

fs.appendFile('demo.txt', ' Hello World', (err)=>{
    if(err){
        throw err.message;
    }
    console.log("File data append successfully")
})

// file unlink method in file system

// fs.unlink('demo.txt', (err) => {
//     if(err){
//         console.log(err);
//     }
//     console.log("File Deleted Successfully")
// })

// read file method in file system

fs.readFile('demo.txt', (err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(data.toString())
        console.log("Read File Successfully")
    }
 
})


