const fs = require('fs')
// var copyDetails;
// fs.readFile('Student_Details.txt', 'utf-8', (err, data)=>{
//     if(err){
//         throw err.message;
//     }
//     copyDetails = data
//     if(copyDetails!=null){
//         fs.writeFile('copyDetails.txt', copyDetails.toString(), (err)=> {
//             if(err){
//                 throw err.message
//             }
//             console.log("Data copy successfully")
//         })
//     } else{
//         console.log("No data in file")
//     }
// })

fs.copyFile('Student_Details.txt', 'copyDetails.txt', (err) => {
    if(err){
        throw err.message;
    }
    console.log("data copy successfully")
})

