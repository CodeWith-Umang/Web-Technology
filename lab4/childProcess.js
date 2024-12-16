const child_process = require('child_process');
const { stdin } = require('process');

child_process.exec("firebase", (err, stdout, stdin) => {
    if(err){
        throw err.message
    }
    console.log(stdout)
})