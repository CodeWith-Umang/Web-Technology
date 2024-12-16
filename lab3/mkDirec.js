const fs = require('fs')
const path = require('path')

// make directory method
fs.mkdir(path.join('C:\\Users\\student\\Desktop\\C534\\lab3', 'index'), (err) =>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Directory Maked..")
    }
})

// remove directory method
fs.rmdir('C:\\Users\\student\\Desktop\\C534\\lab3\\index', (err) => {
    if(err){
        console.log(err)
    }
    else{
        console.log("Remove folder successfully") 
    }
})


