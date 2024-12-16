const fs = require('fs');
const path = require('path')

fs.readdir('C:\\Users\\student\\Desktop\\C534\\lab3',{withFileTypes: true}, (err, files) => {
    if (err) {
        console.log(err)
    }
    else{
        files.forEach(files => {
            if(path.extname(files) == '.js'){
                console.log(files)
            }
        })
    }
})