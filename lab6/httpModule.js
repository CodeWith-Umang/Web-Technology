const http = require('http')
const fs = require('fs')
const server = http.createServer((req, res) => {
    // console.log(req)
    console.log(req.url)
    res.statusCode = 200
    res.statusMessage = 'ok'
  

    if(req.url=='/'){
        res.end("")
    }
    else if(req.url=='/about'){
        res.end("About Page")
    }
    else if(req.url=='/contact'){
        res.end('contact page')
    }
    else if(req.url=='/login'){
        res.end('login page')
    }
    else if(req.url=='/data'){
        fs.readFile('demo.txt', 'utf-8', (err, data) => {
            res.statusCode = 200
            res.statusMessage = 'Data Send Sucessfully'
            res.write(data)
            res.end()
        })
    }
})

server.listen(8000, ()=> {
    console.log("Server Created....")

    
})

setInterval(() => {
    console.log("Server Closed...")
    server.close();
    process.exit()
},3000)